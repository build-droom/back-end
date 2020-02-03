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

// for endpoints beginning with /api/seekers/register
router.post("/register", (req, res) => {
	let seeker = req.body;
	const hash = bcrypt.hashSync(seeker.password, 3); // 2 ^ n
	seeker.password = hash;

	Seekers.add(seeker)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			console.log("error", "error in registering");
			res.status(500).json(error);
		});
});

// endpoint for login in
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

					res.status(200).json({ token }); // <<<<<<<<<<
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
router.get("/", restrict, (req, res) => {
	Seekers.find()
		.then(seekers => {
			res.json(seekers);
		})
		.catch(err => {
			console.log(err, "error in seekers-router /get");
			res.send(err);
		});
});

// Update a seeker with specified id using PUT /api/seekers/:id
router.put("/:id", async (req, res) => {
	const {
		username,
		full_name,
		seekers_email,
		occupation,
		seekers_location,
		education,
		experienced,
		id
	} = req.body;

	if (
		!username ||
		!full_name ||
		!seekers_email ||
		!occupation ||
		!seekers_location ||
		!education ||
		!experienced ||
		!id
	) {
		res.status(400).json({
			message:
				"Make sure username, full_name, seekers_email,occupation,seekers_location, education, experienced, id are included"
		});
	}
	try {
		const seeker = await Seekers.findById(req.params.id);

		if (!seeker)
			return res.status(404).json({
				message: "Profile doesn't exist"
			});

		const updatedSeeker = await Seekers.update(req.body);

		res.status(200).json(updatedSeeker);
	} catch (err) {
		res.status(500).json({
			message: " Something went wrong while updating"
		});
	}
});

// deleting a seeker
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
			res.status(500).json({ message: "Failed to delete recipe" });
		});
});

module.exports = router;
