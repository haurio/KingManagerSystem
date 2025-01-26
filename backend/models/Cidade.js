const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'cidades', // Nome da tabela pluralizada
  timestamps: false
});

module.exports = Cidade;
