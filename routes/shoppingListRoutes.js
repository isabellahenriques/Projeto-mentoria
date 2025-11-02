const express = require('express');
const router = express.Router();
const shoppingListController = require('../controllers/shoppingListController');

router.post('/', shoppingListController.createList);
router.get('/', shoppingListController.getLists);
router.patch('/:listId/check/:productId', shoppingListController.checkProduct);
router.delete('/:listId', shoppingListController.deleteList);

module.exports = router;