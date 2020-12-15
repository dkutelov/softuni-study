import { userState } from './userState.js';
import { handleError, showNotification } from './common.js';
import { teamService } from './services.js';

export function createTeam({ params: { name, comment } }) {
    if (name === '') {
        handleError({ message: 'Team should have a name!' });
        return;
    }

    const { id, username } = userState.getUser();
    teamService.getAllTeams().then((teams) => {
        const existingTeam = teams.find((team) => team.author === id);
        const isMember = userState.getUser().isOnTeam;

        if (existingTeam || isMember) {
            handleError({
                message:
                    'You can not create more than one team! You can not be a member in more than one team!',
            });
            this.redirect('/catalog');
            return;
        }

        const newTeam = {
            name,
            comment,
            author: id,
            members: [{ id, username }],
        };

        teamService
            .createTeam(newTeam)
            .then((team) => {
                showNotification({ message: 'Team created successfully!' });
                this.redirect('/catalog');
                userState.setUser({ hasTeam: true, isOnTeam: team.id });
            })
            .catch((err) => {
                this.redirect('/create');
                handleError(err);
            });
    });
}

export function editTeam({ params: { name, comment, id } }) {
    if (name === '') {
        handleError({ message: 'Team should have a name!' });
        return;
    }

    const updatedTeam = {
        name,
        comment,
    };

    teamService
        .editTeam(id, updatedTeam)
        .then(() => {
            showNotification({ message: 'Team updated successfully!' });
            this.redirect('/catalog');
        })
        .catch((err) => {
            this.redirect(`/edit/${id}`);
            handleError(err);
        });
}

export function leaveTeam({ params: { id: teamId } }) {
    const { id: userId } = userState.getUser();

    teamService.getTeamById(teamId).then(({ members, author }) => {
        if (userId === author) {
            teamService
                .deleteTeam(teamId)
                .then(() => {
                    showNotification({
                        message: 'You left the team and the team was deleted!',
                    });
                    userState.setUser({ hasTeam: false, isOnTeam: null });
                    this.redirect(`/catalog`);
                })
                .catch((err) => {
                    this.redirect(`/catalog/${teamId}`);
                    handleError(err);
                });
        } else {
            teamService
                .editTeam(teamId, {
                    members: members.filter((member) => member.id !== userId),
                })
                .then(() => {
                    showNotification({
                        message: 'You left the team!',
                    });
                    userState.setUser({ hasTeam: false, isOnTeam: null });
                    this.redirect(`/catalog/${teamId}`);
                })
                .catch((err) => {
                    this.redirect(`/catalog/${teamId}`);
                    handleError(err);
                });
        }
    });
}

export function joinTeam({ params: { id: teamId } }) {
    const { id: userId, username, hasTeam, isOnTeam } = userState.getUser();
    if (hasTeam || isOnTeam) {
        handleError({
            message: 'You can not be a member of more than one team!',
        });
        this.redirect('/catalog');
        return;
    }

    teamService.getTeamById(teamId).then(({ members }) => {
        teamService
            .editTeam(teamId, {
                members: [...members, { id: userId, username }],
            })
            .then(() => {
                showNotification({
                    message: 'You joined the team!',
                });
                userState.setUser({ hasTeam: true, isOnTeam: teamId });
                this.redirect(`/catalog/${teamId}`);
            })
            .catch((err) => {
                this.redirect(`/#/catalog/${teamId}`);
                handleError(err);
            });
    });
}
