import { teamService } from './services.js';

export const userState = {
    user: {
        loggedIn: false,
        hasTeam: false,
        username: null,
        id: null,
        isOnTeam: false,
    },
    initUserState() {
        if (typeof window === 'undefined') {
            return;
        }

        const userFromSessionStorage = sessionStorage.getItem('user');

        if (userFromSessionStorage) {
            this.user = { ...JSON.parse(userFromSessionStorage) };
        }

        sessionStorage.setItem('user', JSON.stringify(this.user));
    },

    getUser() {
        return this.user;
    },

    setUser(param) {
        this.user = {
            ...this.user,
            ...param,
        };

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('user', JSON.stringify(this.user));
        }

        return this.user;
    },

    getUserFromStorage(context) {
        context.loggedIn = false;
        context.username = null;
        context.hasTeam = false;
        context.isOnTeam = false;

        if (typeof window !== 'undefined') {
            let currentUser = sessionStorage.getItem('user');
            if (currentUser) {
                currentUser = JSON.parse(currentUser);
                Object.assign(context, currentUser);
            }
        }
        return context;
    },
    userIsMember(userId, teams) {
        let isMember;
        teams.forEach((team) => {
            team.members.forEach((teamMember) => {
                if (teamMember.id === userId) {
                    isMember = team;
                }
            });
        });
        return isMember;
    },
    async hasTeam(currentUserId) {
        const teams = await teamService.getAllTeams();
        const isAuthor = teams.find((team) => team.author === currentUserId);
        const isMember = this.userIsMember(currentUserId, teams);
        if (isAuthor) {
            return isAuthor.id;
        }
        if (isMember) {
            return isMember.id;
        }
    },
};
