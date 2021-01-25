const express = require('express');
const todoController = require('./../controllers/todoController');
const router = express.Router();

router.route('/').get(todoController.getAllTodo).post(todoController.addTodo);
router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
