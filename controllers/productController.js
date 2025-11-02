const products = require('../model/productModel');
const categories = [
  'Sacolão', 'Proteina', 'Padaria', 'Frios', 'Higiene', 'Limpeza', 'Bebidas', 'Alimentos Diversos', 'Produtos Diversos'
];
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

exports.createProduct = [upload.single('photo'), (req, res) => {
  const { name, quantity, observation, category } = req.body;
  if (!categories.includes(category)) {
    return res.status(400).json({ message: 'Categoria inválida' });
  }
  const photo = req.file ? req.file.buffer.toString('base64') : null;
  const product = { id: Date.now(), name, photo, quantity, observation, category, checked: false };
  products.push(product);
  res.status(201).json(product);
}];

exports.getProducts = (req, res) => {
  const grouped = {};
  categories.forEach(cat => {
    grouped[cat] = products.filter(p => p.category === cat);
  });
  res.json(grouped);
};

exports.updateProduct = [upload.single('photo'), (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id == id);
  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
  const { name, quantity, observation, category } = req.body;
  if (category && !categories.includes(category)) {
    return res.status(400).json({ message: 'Categoria inválida' });
  }
  product.name = name || product.name;
  product.quantity = quantity || product.quantity;
  product.observation = observation || product.observation;
  product.category = category || product.category;
  if (req.file) product.photo = req.file.buffer.toString('base64');
  res.json(product);
}];

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ message: 'Produto não encontrado' });
  products.splice(index, 1);
  res.status(204).send();
};