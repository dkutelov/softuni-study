const config = {
  development: {
    PORT: 4242 || 5000,
  },
  production: {
    PORT: 80,
  },
};

module.exports = config[process.env.NODE_ENV];
