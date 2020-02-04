const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Match = require("./matches-model.js");

const restrict = require("../authenticate-middleware.js");

// GET requests to /api/matches returns list of ALL matched entries
router.get("/", (req, res) => {
	Match.find()
		.then(matches => {
			res.json(matches);
		})
		.catch(err => res.send(err));
});

// query
router.get("/:id", (req, res) => {
	const id = req.params.id;
	Match.findMatch(id)
		.then(matches => {
			res.status(200).json(matches);
		})
		.catch(err => {
			console.log(err, "error matching");
			res.status(500).json({ error: "error cannot do matches" });
		});
});

//GET by id /api/companies/jobs/:id joblisting
// router.get("/jobs/:id", async (req, res) => {
// 	const job = await Companies.findJobById(req.params.id);
// 	if (job) {
// 		res.status(200).json(job);
// 	} else {
// 		console.log("error in GET api/companies/jobs/:id");
// 		res
// 			.status(500)
// 			.json({ error: "The joblisting information could not be retrieved." });
// 	}
// });

//get by id /api/companies/issued/:id joblisting based on comp id
// router.get("/jobs/issued/:id", async (req, res) => {
// 	const job = await Companies.findAllJobById(req.params.id);
// 	if (job) {
// 		res.status(200).json(job);
// 	} else {
// 		console.log("error in GET api/companies/jobs/issued/:id");
// 		res
// 			.status(500)
// 			.json({ error: "The joblisting information could not be retrieved." });
// 	}
// });

//get by id /api/companies/:id
// router.get("/:id", restrict, async (req, res) => {
// 	const profile = await Companies.findById(req.params.id);
// 	if (profile) {
// 		res.status(200).json(profile);
// 	} else {
// 		console.log("error in GET api/companies/id");
// 		res
// 			.status(500)
// 			.json({ error: "The companies information could not be retrieved." });
// 	}
// });

module.exports = router;
