const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estado = sequelize.define('Estado', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome_estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sigla_estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'estados'
});

module.exports = Estado;
