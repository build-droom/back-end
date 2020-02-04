const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const db = require("./appliedTo-model.js");
const restrict = require("../authenticate-middleware.js");

function signToken(apply) {
	const payload = {
		apply
	};

	const options = {
		expiresIn: "3d"
	};

	return jwt.sign(payload, jwtSecret, options);
}

//GET requests to /api/apply returns list of all applications sent
router.get("/", restrict, (req, res) => {
	db.find()
		.then(applies => {
			res.json(applies);
		})
		.catch(err => {
			console.log(err, "error in applications /get");
			res.send(err);
		});
});

//get by id /api/apply/:id
router.get("/:id", restrict, async (req, res) => {
	const reachout = await db.findById(req.params.id);
	if (reachout) {
		res.status(200).json(reachout);
	} else {
		console.log("error in GET api/apply/id");
		res
			.status(500)
			.json({ error: "Applications information could not be retrieved." });
	}
});

// deleting an application log
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	db.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: "Could not find an application-log with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to delete application-log" });
		});
});

module.exports = router;
