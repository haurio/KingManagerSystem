const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidade = sequelize.define('Cidade', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome_cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estado_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Estados',
      key: 'id'
    }
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
  tableName: 'cidades'
});

module.exports = Cidade;
