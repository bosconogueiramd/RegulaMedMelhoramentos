const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

const SECRET_KEY = 'your_secret_key';

const registerUserRouter = (router) => {
  router.post('/register', async (req, res) => {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...userData, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
          res.status(200).json({ user, token });
        } else {
          res.status(401).json({ message: 'Email ou senha inválidos' });
        }
      } else {
        res.status(401).json({ message: 'Email ou senha inválidos' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao fazer login' });
    }
  });

  router.get('/users', authenticateToken, async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
  });

  router.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
  });

  router.delete('/users/:id', authenticateToken, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar usuário' });
    }
  });

  router.put('/users/:id', authenticateToken, async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
  });
};

module.exports = registerUserRouter;