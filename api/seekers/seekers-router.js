const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Seekers = require("./seekers-model.js");
const restricted = require("../authenticate-middleware.js");

function signToken(seeker) {
	const payload = {
		seeker
	};

	const options = {
		expiresIn: "1d"
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
router.post("/login", restricted, (req, res) => {
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
router.get("/", restricted, (req, res) => {
	Seekers.find()
		.then(seekers => {
			res.json(seekers);
		})
		.catch(err => {
			console.log(err, "error in seekers-router /get");
			res.send(err);
		});
});

module.exports = router;
