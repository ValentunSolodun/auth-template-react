const Sequelize = require("sequelize");
// const Users = require("../models/User.model");

const sequelize = new Sequelize('chat', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();

module.exports = sequelize;