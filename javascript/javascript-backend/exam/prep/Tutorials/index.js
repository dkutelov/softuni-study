const app = require('express')();
require('dotenv').config();

require('./config/express')(app);
require('./config/mongoose')(app);

const routes = require('./routes');
//const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 5000;

app.use(routes);
//app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
