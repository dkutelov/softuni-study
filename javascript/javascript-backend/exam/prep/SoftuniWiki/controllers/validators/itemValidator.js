function isEmtpy(data) {
    const propNames = Object.keys(data);
    return !(propNames.length === propNames.filter((k) => data[k]).length);
}

module.exports = function ({ title, description }) {
    let errors = [];
    if (
        isEmtpy({
            title,
            description,
        })
    ) {
        errors.push('Fields can not be empty!');
    }

    if (title.length < 5) {
        errors.push('The title should be at least 5 characters!');
    }

    if (description.length < 20) {
        errors.push('The description should be at least 20 characters!');
    }

    return {
        error: { message: errors.join(' ') },
    };
};
