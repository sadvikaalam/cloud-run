const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define(
  "user",
  {
    username: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING }
  },
  {
    freezeTableName: true
  }
);

module.exports = User;  