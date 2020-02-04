const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Job = require("./joblisting-model.js");
const Companies = require("../companies/companies-model.js");

const restrict = require("../authenticate-middleware.js");

function signToken(company) {
	const payload = {
		company
	};

	const options = {
		expiresIn: "3d"
	};

	return jwt.sign(payload, jwtSecret, options);
}

//Creates a job for the company with the specified id using information sent inside of the `request
//not working below need to fix
//api/joblisting/:id
router.post("/:id/job", (req, res) => {
	const { text } = req.body;

	const id = req.params.id;

	Companies.findById(id).then(companies => {
		if (!companies[0]) {
			res.status(404).json("The company with the specified ID does not exist.");
		}
	});

	if (!text) {
		res
			.status(400)
			.json({ errorMessage: "Please provide text for the comment." });
	} else {
		Companies.insert({ text })
			.then(newjob => {
				if (!newjob) {
					res.status(404).json({
						message: "The job with the specified ID does not exist."
					});
				} else {
					res.status(201).json(newjob);
				}
			})
			.catch(error => {
				console.log(error);
				res.status(500).json({
					error:
						"There was an error while saving the new joblisting to the database"
				});
			});
	}
});
module.exports = router;
