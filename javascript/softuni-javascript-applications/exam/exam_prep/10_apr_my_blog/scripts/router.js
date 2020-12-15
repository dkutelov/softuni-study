let root = document.getElementById('root');

const routes = {
    home: 'home-template',
    register: 'user-register-template',
    login: 'user-login-template',
    details: 'post-detail-template',
    edit: 'post-edit-template',
};

const router = async (basePath) => {
    let [path, id] = basePath.split('/');

    if (path === 'logout') {
        onLogout();
        return;
    }

    let template = Handlebars.compile(
        document.getElementById(routes[path]).innerHTML
    );
    render(path, template, id);
};

const render = async (path, template, id) => {
    const tempData = await getTemplateData(path, id);
    root.innerHTML = template(tempData);
};

const getTemplateData = async (path, id) => {
    const tempateData = authService.getAuthData();
    let allPosts;
    let post;
    switch (path) {
        case 'home':
            allPosts = await getPostsData();
            tempateData.posts = allPosts;
            break;
        case 'details':
            post = await getPostDetail(id);
            Object.assign(tempateData, post);
            break;
        case 'edit':
            allPosts = await getPostsData();
            post = await getPostDetail(id);
            console.log('post', post);
            Object.assign(tempateData, post, { posts: allPosts });
            console.log('temp', tempateData);
            break;
    }

    return tempateData;
};

const navigate = (path) => {
    history.pushState({ path }, null, path);
    const popEvent = new CustomEvent('popstate');
    popEvent.state = { path };
    window.dispatchEvent(popEvent);
};

window.onpopstate = function (event) {
    let path;
    if (event.state) {
        path = event.state.path;
    } else {
        path = 'home';
    }
    router(path);
};
