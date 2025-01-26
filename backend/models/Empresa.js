const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  numero_loja: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cnpj: {
    type: DataTypes.STRING
  },
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_fantasia: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  },
  cidade: {
    type: DataTypes.STRING
  },
  uf: {
    type: DataTypes.STRING
  },
  cep: {
    type: DataTypes.STRING
  },
  bairro: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.ENUM('ativo', 'inativo'),
    defaultValue: 'ativo'
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
  tableName: 'empresas'
});

module.exports = Empresa;
