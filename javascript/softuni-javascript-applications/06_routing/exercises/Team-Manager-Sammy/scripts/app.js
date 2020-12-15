import {
    renderHome,
    renderLogin,
    renderRegister,
    renderAbout,
    renderCatalog,
    renderCreateTeam,
    renderEditTeam,
    renderTeamDetails,
} from './pages.js';
import { createTeam, editTeam, leaveTeam, joinTeam } from './team.js';
import { register, logout, login } from './auth.js';
import { userState } from './userState.js';

// init user state
userState.initUserState();

// router
const router = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', renderHome);
    this.get('/login', renderLogin);
    this.get('/register', renderRegister);
    this.get('/about', renderAbout);
    this.get('/catalog', renderCatalog);
    this.get('/catalog/:id', renderTeamDetails);
    this.get('/create', renderCreateTeam);
    this.get('/edit/:id', renderEditTeam);
    this.get('/join/:id', joinTeam);
    this.get('/leave/:id', leaveTeam);
    this.get('/logout', logout);

    this.post('/register', register);
    this.post('/login', login);
    this.post('/create', createTeam);
    this.post('/edit/:id', editTeam);
});

(() => {
    router.run('/');
})();
