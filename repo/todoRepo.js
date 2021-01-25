// const { findByIdAndDelete } = require('../../models/userModel');
const { getTodo } = require("./../controllers/todoController");
const Todo = require("./../models/todoModel");
module.exports = {
  getAllTodo: async () => Todo.find(),
  getTodo: async (id) => Todo.findById(),
  addTodo: async ({ name, complete }) =>
    Todo.create({
      name: name,
      complete: complete,
    }),
  updateTodo: async ({ name, complete }) =>
    Todo.findByIdAndUpdate({
      name: name,
      complete: complete,
    }),
  deleteTodo: async (id) => findByIdAndDelete(),
};
