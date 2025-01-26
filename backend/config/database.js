const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('grupo_alvim_system', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
