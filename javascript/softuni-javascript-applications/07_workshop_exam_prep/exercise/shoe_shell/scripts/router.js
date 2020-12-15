let root = document.getElementById('root');

const routes = {
    home: 'home-template',
    register: 'user-register-template',
    login: 'user-login-template',
    create: 'offer-create-template',
    detail: 'offer-detail-template',
    'detail-edit': 'offer-edit-template',
};

const router = async (basePath) => {
    let [path, id] = basePath.split('/');

    if (basePath.includes('edit')) {
        path = 'detail-edit';
    }

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
    switch (path) {
        case 'home':
            tempateData.products = await getOffersData();
            break;
        case 'detail':
            const offer = await getOfferDetail(id);
            Object.assign(tempateData, offer);
            break;
        case 'detail-edit':
            const editOffer = await getOfferDetail(id);
            Object.assign(tempateData, editOffer);
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
