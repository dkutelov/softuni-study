function loadRepos() {
	const repoElement = document.getElementById('repos');
	repoElement.innerHTML = null;
	const userElement = document.getElementById('username');
	const url = `https://api.github.com/users/${userElement.value}/repos`;
	userElement.value = null;

	fetch(url)
		.then(res => res.json())
		.then(data => {
			data.forEach( repo => {
				const currentRepo = `<li>
            <a href="${repo.html_url}">
                ${repo.full_name}
            </a>
        </li>`;
				repoElement.innerHTML += currentRepo;
			})
		})
		.catch( e => repoElement.innerHTML = 'No such user');
}