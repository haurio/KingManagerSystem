const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome_cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nivel_acesso: {
    type: DataTypes.INTEGER,
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
  tableName: 'cargos'
});

module.exports = Cargo;
