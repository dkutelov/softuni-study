import { Router } from 'https://unpkg.com/@vaadin/router';

import { userLogout } from './services/authServices.js';
import Home from './components/home.js';
import Register from './components/register.js';
import Login from './components/login.js';
import MovieDetails from './components/movie-details.js';

customElements.define('home-component', Home);
customElements.define('register-component', Register);
customElements.define('login-component', Login);
customElements.define('movie-details-component', MovieDetails);

const root = document.getElementById('root');
const router = new Router(root);

router.setRoutes([
    {
        path: '/',
        component: 'home-component',
    },
    {
        path: '/register',
        component: 'register-component',
    },
    {
        path: '/login',
        component: 'login-component',
    },
    {
        path: '/logout',
        action: (context, commands) => {
            userLogout();
            return commands.redirect('/');
        },
    },
    {
        path: '/details/:id',
        component: 'movie-details-component',
    },
]);
