const bcrypt = require("bcryptjs");
const db = require("../../data/dbConfig.js");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Jobs = require("./joblisting-model.js");

const restrict = require("../authenticate-middleware.js");

function signToken(job) {
	const payload = {
		job
	};

	const options = {
		expiresIn: "3d"
	};

	return jwt.sign(payload, jwtSecret, options);
}

router.post("/", restrict, (req, res) => {
	const newJob = req.body;
	db("joblisting")
		.insert(newJob)
		.then(joblisting => {
			res.status(201).json(joblisting);
		})
		.catch(err => {
			console.log(err);
		});
});

//GET requests to /api/joblisting returns list of all joblistings
router.get("/", restrict, (req, res) => {
	Jobs.find()
		.then(joblisting => {
			res.json(joblisting);
		})
		.catch(err => {
			console.log(err, "error in joblisting-router /get");
			res.send(err);
		});
});

//GET by id /api/jobs:id joblisting
router.get("/:id", async (req, res) => {
	const job = await Jobs.findById(req.params.id);
	if (job) {
		res.status(200).json(job);
	} else {
		console.log("error in GET api/joblisting/:id");
		res
			.status(500)
			.json({ error: "The joblisting information could not be retrieved." });
	}
});

//GET by id /api/jobs/company/:id
router.get("/company/:id", async (req, res) => {
	const jobs = await Jobs.findJobById(req.params.id);
	if (jobs) {
		res.status(200).json(jobs);
	} else {
		console.log("error in GET api/joblisting/:id");
		res
			.status(500)
			.json({ error: "The joblisting information could not be retrieved." });
	}
});

// deleting a joblisting
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Jobs.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: "Could not find a joblisting with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to delete recipe" });
		});
});

//put request to api/joblisting
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	db("joblisting")
		.where({ id })
		.update(changes)
		.then(job => {
			if (job) {
				res.json({ update: job });
			} else {
				res
					.status(404)
					.json({ message: "Could not find joblisting with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to update joblisting" });
		});
});

module.exports = router;
