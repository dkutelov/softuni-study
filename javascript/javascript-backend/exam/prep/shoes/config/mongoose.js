const mongoose = require('mongoose');
const { DB_URI } = require('./config');

module.exports = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection error: '));
    db.once('open', console.error.bind(console, '💾 Databse is connected'));
};
