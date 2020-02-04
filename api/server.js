const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restrict = require("./authenticate-middleware.js");
const companiesRouter = require("./companies/companies-router.js");
const seekersRouter = require("./seekers/seekers-router.js");
const jobsRouter = require("./joblisting/joblisting-router");
const appliedRouter = require("./appliedTo/appliedTo-model");
const matchRouter = require("./matches/matches-model");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/companies", companiesRouter);
server.use("/api/seekers", seekersRouter);
server.use("/api/joblisting", jobsRouter);
// server.use("/api/apply", restrict, appliedRouter);
// server.use("/api/matches", matchRouter);

server.get("/", (req, res) => {
	res.status(200).json({ api: "Server is up and running!" });
});

module.exports = server;
