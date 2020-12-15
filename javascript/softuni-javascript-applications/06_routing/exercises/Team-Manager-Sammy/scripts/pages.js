import { userState } from './userState.js';
import { teamService } from './services.js';
const getUserFromStorage = userState.getUserFromStorage;

const commonPatials = {
    header: '../templates/common/header.hbs',
    footer: '../templates/common/footer.hbs',
};

export function renderHome(context) {
    context = getUserFromStorage(context);
    context.teamId = context.isOnTeam;
    this.loadPartials(commonPatials).then(function () {
        this.partial('../../templates/home/home.hbs');
    });
}

export function renderAbout(context) {
    context = getUserFromStorage(context);
    this.loadPartials(commonPatials).then(function () {
        this.partial('../../templates/about/about.hbs');
    });
}

export function renderCatalog(context) {
    context = getUserFromStorage(context);
    context.hasNoTeam = !context.hasTeam;

    teamService.getAllTeams().then((teams) => {
        context.teams = teams;
        this.loadPartials({
            ...commonPatials,
            team: '../templates/catalog/team.hbs',
        }).then(function () {
            this.partial('../templates/catalog/teamCatalog.hbs');
        });
    });
}

export function renderTeamDetails(context) {
    context = getUserFromStorage(context);
    const teamId = context.params.id;
    context.isOnTeam = context.isOnTeam === teamId;

    teamService.getTeamById(teamId).then((team) => {
        Object.assign(context, team);
        const { author, id } = context;
        if (author === id) {
            context.isAuthor = true;
        }
        const memberIds = team.members.map((member) => member.id);
        if (memberIds.includes(id)) {
            context.isOnTeam = true;
        }

        this.loadPartials({
            ...commonPatials,
            teamMember: '../templates/catalog/teamMember.hbs',
            teamControls: '../templates/catalog/teamControls.hbs',
        }).then(function () {
            this.partial('../templates/catalog/details.hbs');
        });
    });
}

export function renderCreateTeam(context) {
    context = getUserFromStorage(context);
    context.hasNoTeam = !context.hasTeam;
    this.loadPartials({
        ...commonPatials,
        createForm: '../templates/create/createForm.hbs',
    }).then(function () {
        this.partial('../templates/create/createPage.hbs');
    });
}

export function renderEditTeam(context) {
    context = getUserFromStorage(context);
    const teamId = context.params.id;
    teamService.getTeamById(teamId).then((team) => {
        Object.assign(context, team);
        this.loadPartials({
            ...commonPatials,
            editForm: '../templates/edit/editForm.hbs',
        }).then(function () {
            this.partial('../templates/edit/editPage.hbs');
        });
    });
}

export function renderLogin(context) {
    context = getUserFromStorage(context);
    this.loadPartials({
        ...commonPatials,
        loginForm: '../../templates/login/loginForm.hbs',
    }).then(function () {
        this.partial('../../templates/login/loginPage.hbs');
    });
}

export function renderRegister(context) {
    context = getUserFromStorage(context);
    this.loadPartials({
        ...commonPatials,
        registerForm: '../../templates/register/registerForm.hbs',
    }).then(function () {
        this.partial('../../templates/register/registerPage.hbs');
    });
}
