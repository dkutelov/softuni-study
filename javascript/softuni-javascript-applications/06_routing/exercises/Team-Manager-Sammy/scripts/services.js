const dbUrl = 'https://softuni-27659.firebaseio.com/';

const makeRequest = async (url, method, body) => {
    const options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const teamService = {
    async getAllTeams() {
        const teams = await makeRequest(`${dbUrl}/teams.json`, 'GET');
        return teams
            ? Object.keys(teams).map((id) => ({ id, _id: id, ...teams[id] }))
            : [];
    },
    async createTeam(teamObj) {
        const team = await makeRequest(`${dbUrl}/teams.json`, 'POST', teamObj);
        return team;
    },
    async getTeamById(id) {
        const team = await makeRequest(`${dbUrl}/teams/${id}/.json`, 'GET');
        team.teamId = id;
        return team;
    },
    async editTeam(id, teamObj) {
        const updatedTeam = await makeRequest(
            `${dbUrl}/teams/${id}/.json`,
            'PATCH',
            teamObj
        );
        return updatedTeam;
    },
    async deleteTeam(id) {
        await makeRequest(`${dbUrl}/teams/${id}/.json`, 'DELETE');
        return;
    },
};
