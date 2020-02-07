const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Seekers = require("./seekers-model.js");
const restrict = require("../authenticate-middleware.js");

function signToken(seeker) {
	const payload = {
		seeker
	};

	const options = {
		expiresIn: "3d"
	};

	return jwt.sign(payload, jwtSecret, options);
}

//REGISTER AS A NEW JOB SEEKER
router.post("/register", (req, res) => {
	let seeker = req.body;
	const hash = bcrypt.hashSync(seeker.password, 3); // 2 ^ n
	seeker.password = hash;

	Seekers.add(seeker)
		.then(saved => {
			const token = signToken(saved);
			res.status(201).json({ saved, token });
		})
		.catch(error => {
			console.log("error", "error in registering");
			res.status(500).json(error);
		});
});

// LOGIN AS A JOB SEEKER
router.post("/login", (req, res) => {
	let { username, password } = req.body;

	if (!username || !password) {
		res
			.status(401)
			.json({ message: "username and password are both required to login" });
	} else {
		Seekers.findBy({ username })
			.first()
			.then(seeker => {
				if (seeker && bcrypt.compareSync(password, seeker.password)) {
					const token = signToken(seeker); // <<<<<<<<<<<

					res.status(200).json({ seeker, token }); // <<<<<<<<<<
				} else {
					res.status(401).json({ message: "Invalid Credentials" });
				}
			})
			.catch(error => {
				res.status(500).json(error);
			});
	}
});

//GET requests to /api/seekers returns list of all seekers
router.get("/", (req, res) => {
	Seekers.find()
		.then(seekers => {
			res.json(seekers);
		})
		.catch(err => {
			console.log(
				err,
				"error in seekers-router /get credentials are invalid or missing"
			);
			res
				.status(500)
				.json({ error: "Error unable to retrieve list of job seekers" });
		});
});

//get by id /api/seekers/:id
router.get("/:id", async (req, res) => {
	const seeker = await Seekers.findById(req.params.id);
	if (seeker) {
		res.status(200).json(seeker);
	} else {
		console.log("error in GET api/seekers/id");
		res
			.status(500)
			.json({ error: "The companies information could not be retrieved." });
	}
});

// Update a seeker with specified id using PUT /api/seekers/:id
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Seekers.update(id, changes)
		.then(seeker => {
			if (seeker) {
				res.json({ update: seeker });
			} else {
				res
					.status(404)
					.json({ message: `Could not find job seeker with given ${id}` });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: `Failed to update job seeker profile with id:${id}` });
		});
});

// DELETE A SEEKER
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Seekers.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: "Could not find a seeker with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to delete seeker" });
		});
});

module.exports = router;
