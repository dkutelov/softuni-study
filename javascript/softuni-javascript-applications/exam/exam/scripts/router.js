import { render } from '../node_modules/lit-html/lit-html.js';

import layout from './views/layout.js';
import home from './views/home.js';
import login from './views/login.js';
import register from './views/register.js';
import create from './views/create.js';
import detail from './views/detail.js';
import edit from './views/edit.js';
import notFound from './views/not-found.js';
import loading from './views/loading.js';
import dashboard from './views/my-items.js';

import authController from './controllers/authController.js';
import itemsController from './controllers/itemsController.js';

import authService from './services/authService.js';

const rootElement = document.getElementById('container');

const routes = [
    {
        path: /^\/$/i,
        template: home,
        data: itemsController.homepageItems,
    },
    {
        path: /^\/dashboard$/i,
        template: dashboard,
        data: itemsController.dashboardItems,
        ctx: {
            onItemDelete: itemsController.onItemDelete,
        },
    },
    {
        path: /^\/login$/i,
        template: login,
        ctx: {
            onLoginSubmit: authController.onLoginSubmit,
        },
    },
    {
        path: /^\/register$/i,
        template: register,
        ctx: {
            onRegisterSubmit: authController.onRegisterSubmit,
        },
    },
    {
        path: /^\/create$/i,
        template: create,
        ctx: {
            onCreateSubmit: itemsController.onCreateSubmit,
        },
    },
    {
        path: /^\/not-found$/i,
        template: notFound,
    },
    {
        path: /^\/details\/(?<id>.+)$/i,
        template: detail,
        data: itemsController.itemDetail,
    },
    {
        path: /^\/edit\/(?<id>.+)$/i,
        template: edit,
        data: itemsController.itemEdit,
        ctx: {
            onEditSubmit: itemsController.onEditSubmit,
        },
    },
];

export const navigate = (path) => {
    history.pushState({ path }, null, path);
    const popEvent = new CustomEvent('popstate');
    popEvent.state = { path };
    window.dispatchEvent(popEvent);
};

const navigationHandler = (e) => {
    e.preventDefault();
    if (e.target.parentElement.tagName !== 'A' && e.target.tagName !== 'A')
        return;

    let targetPath = e.target.href;
    // case a tag wraps img tag
    if (!targetPath) targetPath = e.target.parentElement.href;

    let url = new URL(targetPath);
    navigate(url.pathname);
};

export const router = (path) => {
    let route =
        routes.find((route) => route.path.test(path)) ||
        routes.find((route) => route.path.test('/not-found'));

    const params = route.path.exec(path).groups;

    const paramObj = {
        navigationHandler,
        onLogout: authController.onLogout,
        user: authService.getAuthData(),
        ...route.ctx,
        params,
    };

    if (route.data) {
        // solves two home page - guest and auth
        if (!authService.getAuthData().isAuthenticated) {
            render(layout(route.template, paramObj), rootElement);
            return;
        }

        render(layout(loading, paramObj), rootElement);
        route.data(params).then((data) => {
            Object.assign(paramObj, { data });
            render(layout(route.template, paramObj), rootElement);
        });
    } else {
        render(layout(route.template, paramObj), rootElement);
    }
};

window.onpopstate = function (event) {
    let path;
    console.log(event);
    if (event.state) {
        path = event.state.path;
    } else {
        path = '/';
    }
    router(path);
};
