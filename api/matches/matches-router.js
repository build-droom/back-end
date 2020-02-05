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

// query matches
// router.get("/:id", async (req, res) => {
// 	const id = req.params.id;
// 	const myMatches = await Match.findMatch(id)
// 		.then(myMatches => {
// 			res.status(200).json(myMatches);
// 		})
// 		.catch(err => {
// 			console.log(err, "error matching");
// 			res.status(500).json({ error: "error cannot do matches" });
// 		});
// });

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const matches = await Match.findMatch(id);
	if (matches) {
		res.status(200).json(matches);
	} else {
		console.log("error in GET api/matches/:id");
		res.status(500).json({ error: "Could not find any matches" });
	}
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
