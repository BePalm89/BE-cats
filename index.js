const express = require("express");
const { connectDB } = require("./src/config/db");
const catRouters = require('./src/api/routes/cat.routes');

connectDB();
const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/cats', catRouters)

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
	return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
  console.log("listen to localhost:3000");
});
