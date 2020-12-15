import { render } from './node_modules/lit-html/lit-html.js';

import layout from './views/layout.js';
import home from './views/home.js';
import login from './views/login.js';
import register from './views/register.js';
import create from './views/create.js';
import details from './views/details.js';
import notFound from './views/not-found.js';

import {
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    onCreateSubmit,
} from './eventListers.js';
import authService from './services/authService.js';
import articleService from './services/articleService.js';

const routes = [
    {
        path: '/',
        template: (props) => {
            const {
                user: { isAuthenticated },
            } = props;

            if (!isAuthenticated) {
                history.pushState({}, '', '/login');
                return login(props);
            }

            return home(props);
        },
        data: articleService.getAll,
    },
    {
        path: '/login',
        template: login,
        ctx: {
            onLoginSubmit,
        },
    },
    {
        path: '/register',
        template: register,
        ctx: {
            onRegisterSubmit,
        },
    },
    {
        path: '/create',
        template: create,
        ctx: {
            onCreateSubmit,
        },
    },
    {
        path: '/not-find',
        template: notFound,
    },
    {
        path: '/details/(?<id>.+)',
        template: details,
        data: articleService.getOneById,
    },
];

const navigationHandler = (e) => {
    if (e.target.tagName !== 'A') return;

    e.preventDefault();
    let url = new URL(e.target.href);
    router(url.pathname);
};

export const router = (path) => {
    history.pushState({}, '', path);

    let route = routes.find((route) =>
        new RegExp(`^${route.path}$`, 'i').test(path)
    ) || {
        path: '/not-find',
        template: notFound,
    };

    const params = new RegExp(`^${route.path}$`, 'i').exec(path).groups;
    const ctx = route.ctx;
    const user = authService.getAuthData();
    if (route.data) {
        route.data(params).then((data) => {
            //TODO create function to build the object pass to layout
            //move data to the ctx
            render(
                layout(route.template, {
                    navigationHandler,
                    user,
                    ...ctx,
                    onLogout,
                    data,
                    params,
                }),
                document.getElementById('app')
            );
        });
    }

    render(
        layout(route.template, {
            navigationHandler,
            user,
            ...ctx,
            onLogout,
            params,
        }),
        document.getElementById('app')
    );
};
