const { findByIdAndDelete } = require('../../models/userModel');
const { getTodo } = require('../todoController');
// const Todo = require('./../models/todoModel');
module.exports = {
    getAllTodo : async( )=>  Todo.find()
   , getTodo :async (id)=>  Todo.findById()
   , addTod : async (name , complete ) =>  Todo.create({
       name : this.name ,
       complete : this.complete ,})
   ,updateTodo : async (name , complete ) =>  findByIdAndUpdate({
       name : this.name ,
       complete : this.complete  }) 
   , deleteTodo : async (id) => findByIdAndDelete()
   }

