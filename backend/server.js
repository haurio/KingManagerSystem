const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);

  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
});
