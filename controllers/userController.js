exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos,
    },
  });
};
exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos,
    },
  });
};
exports.addUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos,
    },
  });
};
exports.updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos,
    },
  });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: todos.length,
    data: {
      todos,
    },
  });
};
