const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

module.exports = function (app) {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection Error!'));
    db.on('open', console.log.bind(console, 'DB connected!'));
};
