const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loja: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Empresas',
      key: 'id'
    }
  },
  cargo: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Cargos',
      key: 'id'
    }
  },
  token: {
    type: DataTypes.STRING
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  data_atualizacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.ENUM('ativo', 'inativo', 'suspenso'),
    defaultValue: 'ativo'
  },
  telefone: {
    type: DataTypes.STRING
  },
  ultimo_login: {
    type: DataTypes.DATE
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
  tableName: 'users'
});

module.exports = User;
