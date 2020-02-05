const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Match = require("./matches-model.js");

const restrict = require("../authenticate-middleware.js");

// GET requests to /api/matches returns list of ALL matched entries
router.get("/", restrict, (req, res) => {
	Match.find()
		.then(matches => {
			res.json(matches);
		})
		.catch(err => res.send(err));
});

//seekers looking for matching jobs
router.get("/:id", restrict, async (req, res) => {
	const id = req.params.id;
	const matches = await Match.findJobs(id);
	if (matches) {
		res.status(200).json(matches);
	} else {
		console.log("error in GET api/matches/:id");
		res.status(500).json({ error: "Could not find any matches" });
	}
});

//companies looking for matched seekers
router.get("/matchseeker/:id", restrict, async (req, res) => {
	const id = req.params.id;
	const matches = await Match.findSeeker(id);
	if (matches) {
		res.status(200).json(matches);
	} else {
		console.log("error in GET api/matches/:id");
		res.status(500).json({ error: "Could not find any matches" });
	}
});

//add matches to saved favorites
router.post("/", restrict, (req, res) => {
	const match = req.body;
	Match.add(match)
		.then(match => {
			res.status(201).json(match);
		})
		.catch(err => {
			console.log(err);
		});
});

// deleting a saved match
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Match.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: "Could not find a saved match with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to delete recipe" });
		});
});

module.exports = router;
