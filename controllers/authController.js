const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
});
