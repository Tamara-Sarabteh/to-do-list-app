
const todoRepo = require('./repo/todoRepo');

module.exports ={
  getAllTodo : async (req, res) => {
    try {
      const todos = await todoRepo.find()
  
      res.status(200).json({
        status: 'success',
        results: todos.length,
        data: {
          todos,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
  
  ,  getTodo : async (req, res) => {
    try {
      const todo = await todoRepo.findById(req.params.id);
  
      res.status(200).json({
        status: 'success',
        data: {
          todo,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
  
  ,addTodo : async (req, res) => {
    try {
      const newTodo = await todoRepo.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          todo: newTodo,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
  
  ,updateTodo : async (req, res) => {
    try {
      const todo = await todoRepo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({
        status: 'success',
        data: {
          todo: newTodo,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
  
 ,deleteTodo : async (req, res) => {
    try {
      const todo = await todoRepo.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  }
}

