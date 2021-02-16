const config = {
  development: {
    PORT: 4242 || 5000,
    SALT_ROUNDS: 5,
    SECRET: "SHKJWHSKLSWQK",
    COOKIE_NAME: "USER_SESSION",
  },
  production: {
    PORT: 80,
    SALT_ROUNDS: 10,
    SECRET: "jflerfjnksjdhflkjhf",
  },
};

module.exports = config[process.env.NODE_ENV];
