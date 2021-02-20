const app = require('express')();

require('./config/mongoose')();
require('./config/express')(app);
const { PORT } = require('./config/config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('server is running');
});

// [X] Config
// [X] Models
// [X] Validations in models and validators
// [X] move static to public folder
// [x] create layout
// [X] register, login, logout
// [X] error notificatioins
// [X] navigation adjust for guests and logged in
// [X] Create Article
// [X] Detail page
// [X] List articles
// [X] Edit and delete page
