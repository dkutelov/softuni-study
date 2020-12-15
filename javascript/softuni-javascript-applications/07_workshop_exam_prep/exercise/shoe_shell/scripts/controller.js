// authentication
const onRegisterSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms['register-form']);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repassword');

    if (email === '' || password === '' || repeatPassword === '') {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    if (password !== repeatPassword) {
        handleError({ message: 'Passwords do not match!' });
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
                })
            );
            navigate('home');
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
                    email: user.email,
                    id: user.uid,
                })
            );
            showNotification({ message: 'Sucessfully login.' });
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

// Offers
const getOffersData = async () => {
    try {
        const data = await offerService.getAll();

        if (!data) {
            return [];
        }

        return Object.keys(data)
            .map((productId) => ({
                productId,
                ...data[productId],
            }))
            .sort((a, b) => {
                const aPurchases = a.purchased ? a.purchased.length : 0;
                const bPurchases = b.purchased ? b.purchased.length : 0;
                return bPurchases - aPurchases;
            });
    } catch (err) {
        handleError(err);
    }
};

// post
const onCreateOffer = async (e) => {
    e.preventDefault();
    let formData = new FormData(document.forms['offer-create-form']);
    const name = formData.get('name');
    const price = formData.get('price');
    const imageURL = formData.get('imageURL');
    const description = formData.get('description');
    const brand = formData.get('brand');

    if (
        name === '' ||
        price === '' ||
        imageURL === '' ||
        description === '' ||
        brand === ''
    ) {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }
    const userId = authService.getAuthData().id;
    const newProduct = {
        name,
        price,
        imageURL,
        description,
        brand,
        creator: userId,
        purchased: [],
    };

    try {
        const { name } = await offerService.add(newProduct);
        showNotification({ message: 'Product successfully created' });
        navigate('home');
    } catch (err) {
        handleError(err);
    }
};

const onEditOffer = async (e, offerId) => {
    e.preventDefault();
    let formData = new FormData(document.forms['offer-edit-form']);
    const name = formData.get('name');
    const price = formData.get('price');
    const imageURL = formData.get('imageURL');
    const description = formData.get('description');
    const brand = formData.get('brand');

    if (
        name === '' ||
        price === '' ||
        imageURL === '' ||
        description === '' ||
        brand === ''
    ) {
        handleError({ message: 'Fields can not be empty!' });
        return;
    }

    const updatedOffer = {
        name,
        price,
        imageURL,
        description,
        brand,
    };

    try {
        await offerService.update(offerId, updatedOffer);
        showNotification({ message: 'Product successfully updated' });
        navigate(`detail/${offerId}`);
    } catch (err) {
        handleError(err);
    }
};

const onDeleteOffer = async (e, offerId) => {
    try {
        const { successMessage } = await offerService.delete(offerId);
        navigate('home');
        showNotification({ message: successMessage });
    } catch (err) {}
};

const getOfferDetail = async (id) => {
    const user = authService.getAuthData();

    try {
        const offer = await offerService.getOfferById(id);
        offer.offerId = id;
        if (offer.creator === user.id) {
            offer.isCreator = true;
        }

        if (offer.purchased) {
            offer.purchaseCount = offer.purchased.length;
        } else {
            offer.purchaseCount = 0;
        }

        if (offer.purchased && offer.purchased.includes(user.email)) {
            offer.isPurchased = true;
        }
        return offer;
    } catch (err) {
        handleError(err);
    }
};

const onBuy = async (e, offerId) => {
    e.preventDefault();
    try {
        const user = authService.getAuthData();

        try {
            const offer = await offerService.getOfferById(offerId);
            let purchased = [];
            if (offer.purchased) {
                purchased = offer.purchased;
            }

            purchased.push(user.email);

            await offerService.update(offerId, {
                purchased,
            });

            showNotification({
                message: `You successfully purchased the product!`,
            });
            navigate(`detail/${offerId}`);
            return;
        } catch (err) {
            handleError(err);
        }
        navigate('home');
        showNotification({ message: successMessage });
    } catch (err) {}
};
