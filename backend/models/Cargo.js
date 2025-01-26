const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'cargos', // Nome da tabela pluralizada
  timestamps: false
});

module.exports = Cargo;
