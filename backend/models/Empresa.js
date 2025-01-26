const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Supondo que você tenha um arquivo de configuração de banco

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_fantasia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Adicione outros campos conforme a estrutura da sua tabela
}, {
  tableName: 'empresas', // Defina o nome da tabela no banco
  timestamps: false // Caso sua tabela não tenha campos 'createdAt' e 'updatedAt'
});

module.exports = Empresa;
