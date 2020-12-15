const onRegisterSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms['register-form']);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email === '' || password === '' || repeatPassword === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    if (password !== repeatPassword) {
        handleError({ message: 'Passwords should match!' });
        return;
    }

    if (password.length < 6) {
        handleError({ message: 'Password should be min 6 characters!' });
        return;
    }

    authService.register(email, password).then((response) => {
        try {
            const { user } = response;
            localStorage.setItem(
                'auth',
                JSON.stringify({
                    email: user.email,
                    id: user.uid,
                    isAuthenticated: false,
                })
            );
            navigate('login');
        } catch (error) {
            handleError(response);
        }
    });
};

const onLoginSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms['login-form']);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email === '' || password === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    authService.login(email, password).then((response) => {
        try {
            const { user } = response;
            localStorage.setItem(
                'auth',
                JSON.stringify({
                    isAuthenticated: true,
                    email: user.email,
                    id: user.uid,
                })
            );
            navigate('home');
        } catch (error) {
            handleError(response);
        }
    });
};

const onLogout = async () => {
    try {
        const response = await authService.logout();
        const { status } = response;
        localStorage.removeItem('auth');
        showNotification({ message: status });
        navigate('home');
    } catch (error) {
        handleError(response);
    }
};

const onCreatePost = async (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms['post-create-form']);
    const title = formData.get('title');
    const category = formData.get('category');
    const content = formData.get('content');

    if (title === '' || category === '' || content === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    const userId = authService.getAuthData().id;
    const newPost = {
        title,
        category,
        content,
    };

    try {
        await postService.add(userId, newPost);
        showNotification({ message: 'Postsuccessfully created' });
        navigate('home');
    } catch (err) {
        handleError(err);
    }
};

const getPostsData = async () => {
    try {
        const userId = authService.getAuthData().id;
        const data = await postService.getAll(userId);

        if (!data) {
            return [];
        }

        return Object.keys(data).map((postId) => ({
            postId,
            ...data[postId],
        }));
    } catch (err) {
        handleError(err);
    }
};

const getPostDetail = async (id) => {
    const userId = authService.getAuthData().id;

    try {
        const post = await postService.getPostById(userId, id);
        return post;
    } catch (err) {
        handleError(err);
    }
};

const onEditPost = async (e, postId) => {
    e.preventDefault();
    let formData = new FormData(document.forms['post-edit-form']);
    const title = formData.get('title');
    const category = formData.get('category');
    const content = formData.get('content');

    if (title === '' || category === '' || content === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    const updatedPost = {
        title,
        category,
        content,
    };

    const userId = authService.getAuthData().id;

    try {
        await postService.update(userId, postId, updatedPost);
        showNotification({ message: 'Post successfully updated' });
        navigate(`home`);
    } catch (err) {
        handleError(err);
    }
};

const onDelete = async (e, postId) => {
    const userId = authService.getAuthData().id;
    try {
        const { successMessage } = await postService.delete(userId, postId);
        navigate('home');
        showNotification({ message: successMessage });
    } catch (err) {
        handleError(err);
    }
};
