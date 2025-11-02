const users = require('../model/userModel');
const { generateToken } = require('../service/authService');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = generateToken({ username: user.username });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Usuário ou senha inválidos' });
  }
};

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'Usuário já existe' });
  }
  users.push({ username, password });
  res.status(201).json({ message: 'Usuário registrado com sucesso' });
};

exports.listUsers = (req, res) => {
  const userList = users.map(u => ({ username: u.username }));
  res.json(userList);
};