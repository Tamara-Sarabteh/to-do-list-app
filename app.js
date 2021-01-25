const express = require("express");
const app = express();
const AppError = require("./utils/appError");
const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError("cant find ", 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
