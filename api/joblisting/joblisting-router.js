const router = require("express").Router();
const Jobs = require("./joblisting-model.js");

const restrict = require("../authenticate-middleware.js");

//ADD A NEW JOBLISTING
router.post("/", (req, res) => {
	const newJob = req.body;
	Jobs.insert(newJob)
		.then(joblisting => {
			res.status(201).json(joblisting);
		})
		.catch(err => {
			console.log(err);
		});
});

//GET RETURNS LIST OF ALL JOBLISTINGS IN DATABASE
router.get("/", (req, res) => {
	Jobs.find()
		.then(joblisting => {
			res.json(joblisting);
		})
		.catch(err => {
			console.log(err, "error in joblisting-router /get");
			res.send(err);
		});
});

//GET JOBLISTING WITH SPECIFIC ID
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

//GET  JOBLISTINGS POSTED BY A SPECIFIC COMPANY by id /api/jobs/company/:id
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

// DELETE A SPECIFIED JOB LISTING VIA ID
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

//UPDATE A JOBLISTING
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Jobs.update(id, changes)
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
