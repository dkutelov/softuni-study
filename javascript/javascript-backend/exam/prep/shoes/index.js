const app = require('express')();

require('./config/mongoose')();
require('./config/express')(app);
const { PORT } = require('./config/config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}!`);
});

// [X] Config
// [X] User Model and validation
// [X] Move static to public folder, check structure and remove 'static' from config if not needed
// [x] Create layout
// [X] Register, login, logout - !!! remove isGuest !!! Decide what user info to keep in the token
// [X] error notificatioins
// [X] navigation adjust for guests and logged in
// [X] Create Article
// [X] Detail page
// [X] List articles
// [X] Edit and delete page
// [X] test the application
// [X] remove node_modules
