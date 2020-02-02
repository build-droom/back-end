const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restrict = require("./authenticate-middleware.js");
const companiesRouter = require("./companies/companies-router.js");
const seekersRouter = require("./seekers/seekers-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/companies", restrict, companiesRouter);
server.use("/api/seekers", seekersRouter);

server.get("/", (req, res) => {
	res.status(200).json({ api: "Server is up and running!" });
});

module.exports = server;
