const shoppingLists = require('../model/shoppingListModel');
const products = require('../model/productModel');

exports.createList = (req, res) => {
  if (products.length === 0) return res.status(400).json({ message: 'Nenhum produto cadastrado' });
  const list = {
    id: Date.now(),
    items: products.map(p => ({ ...p, checked: false })),
    createdAt: new Date()
  };
  shoppingLists.push(list);
  res.status(201).json(list);
};

exports.getLists = (req, res) => {
  res.json(shoppingLists);
};

exports.checkProduct = (req, res) => {
  const { listId, productId } = req.params;
  const list = shoppingLists.find(l => l.id == listId);
  if (!list) return res.status(404).json({ message: 'Lista não encontrada' });
  const item = list.items.find(i => i.id == productId);
  if (!item) return res.status(404).json({ message: 'Produto não encontrado na lista' });
  item.checked = true;
  res.json(item);
};

exports.deleteList = (req, res) => {
  const { listId } = req.params;
  const index = shoppingLists.findIndex(l => l.id == listId);
  if (index === -1) return res.status(404).json({ message: 'Lista não encontrada' });
  shoppingLists.splice(index, 1);
  res.status(204).send();
};