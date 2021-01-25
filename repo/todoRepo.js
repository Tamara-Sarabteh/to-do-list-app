const { getTodo } = require("./../controllers/todoController");
const Todo = require("./../models/todoModel");
const Sequelize = require("sequelize");

module.exports = {
  getAllTodo: async () => Todo.find(),
  getTodo: async (id) => Todo.findOne(id),
  addTodo: async ({ name, complete }) =>
    Todo.create({
      name: name,
      complete: complete,
    }),
  updateTodo: async (todoid, { name, complete }) =>
    Todo.updateMany({ _id: todoid }, { name: name, complete: complete }),
  deleteTodo: async (todoid) => Todo.deleteOne({ _id: todoid }),
};

//await Person.replaceOne({ _id }, { name: 'Jean-Luc Picard' })
