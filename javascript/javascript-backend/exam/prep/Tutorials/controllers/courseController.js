const { Router } = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const { validateCourse } = require('./helpers/courseInputValidator');
const courseService = require('../services/courseService');

const router = Router();

router.get('/', async (req, res) => {
    if (req.user) {
        const courses = await courseService.getAll(req.user, req.query);
        res.render('homeUser', { courses });
    } else {
        const courses = await courseService.getAll(req.user);
        console.log(courses);
        res.render('homeGuest', { courses });
    }
});

// C R E A T E
router.get('/create', isAuthenticated, (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    let { title, description, imageUrl, isPublic } = req.body;
    const errorMessage = validateCourse({
        title,
        description,
        imageUrl,
    });
    if (errorMessage) {
        res.render('create', {
            error: { message: errorMessage },
            title,
            description,
            imageUrl,
        });
        return;
    }

    if (isPublic && isPublic === 'on') {
        isPublic = true;
    } else {
        isPublic = false;
    }

    const user = req.user;
    try {
        await courseService.create(
            { title, description, imageUrl, isPublic },
            user
        );
        res.redirect('/');
    } catch (error) {
        res.render('create', { error }, title, description, imageUrl);
    }
});

// D E T A I L
router.get('/:courseId', isAuthenticated, (req, res, next) => {
    const courseId = req.params.courseId;
    const user = req.user;
    courseService
        .findOneById(courseId, user)
        .then((course) => {
            res.render('details', course);
        })
        .catch((error) => {
            console.log(error.message || error.reason);
        });
});

// B O O K
router.get('/:courseId/book', isAuthenticated, (req, res) => {
    const courseId = req.params.courseId;
    const user = req.user;
    courseService
        .bookCourse(courseId, user)
        .then((course) => {
            res.redirect(`/courses/${courseId}`);
        })
        .catch((error) => {
            console.log(error.message || error.reason);
        });
});

// E D I T
router.get('/:courseId/edit', isAuthenticated, (req, res) => {
    const courseId = req.params.courseId;
    const user = req.user;
    courseService
        .findOneById(courseId, user)
        .then((course) => {
            if (!course.isCreator) {
                next({
                    error: {
                        message: 'You are not authorized to edit this hotel!',
                    },
                });
            }
            res.render('edit', course);
        })
        .catch((error) => {
            console.log(error);
        });
});

router.post('/:courseId/edit', isAuthenticated, (req, res, next) => {
    const user = req.user;
    const courseId = req.params.courseId;

    let { title, description, imageUrl, isPublic } = req.body;
    const errorMessage = validateCourse({
        title,
        description,
        imageUrl,
    });
    if (errorMessage) {
        res.render('edit', {
            error: { message: errorMessage },
            title,
            description,
            imageUrl,
            isPublic,
        });
        return;
    }

    if (isPublic && isPublic === 'on') {
        isPublic = true;
    } else {
        isPublic = false;
    }

    courseService
        .editOne(courseId, user, { title, description, imageUrl, isPublic })
        .then((course) => {
            if (!course) {
                next({ message: 'No course found or no authorization' });
                return;
            }

            res.redirect(`/courses/${courseId}`);
        })
        .catch((error) => {
            console.log(error);
            next(error);
        });
});

// D E L E T  E
router.get('/:courseId/delete', isAuthenticated, (req, res) => {
    const courseId = req.params.courseId;
    const user = req.user;
    courseService
        .deleteOne(courseId, user)
        .then((result) => {
            res.redirect(`/courses`);
        })
        .catch((error) => {
            console.log(error.message || error.reason);
        });
});

module.exports = router;
