const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importe o cors
const sequelize = require('./config/database');

// Importando os modelos
const Empresa = require('./models/Empresa');
const Cargo = require('./models/Cargo');
const Cidade = require('./models/Cidade');
const Estado = require('./models/Estado');
const User = require('./models/User');

const app = express();

// Use o CORS antes de qualquer rota
app.use(cors());  // Permite requisições de qualquer origem. Pode ser configurado conforme necessário

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Exemplo de rota para buscar todas as empresas
app.get('/empresas', async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar empresas' });
  }
});

// Resto das rotas...

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);

  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // Use force: false para não apagar dados
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
});
