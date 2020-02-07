const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");
const Companies = require("./companies-model.js");
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

// POST TO REGISTER COMPANY
router.post("/register", (req, res) => {
	let company = req.body;
	const hash = bcrypt.hashSync(company.password, 3); // 2 ^ n
	company.password = hash;

	Companies.add(company)
		.then(saved => {
			const token = signToken(company);
			res.status(201).json({ saved, token });
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

// POST TO LOG IN AS COMPANY
router.post("/login", (req, res) => {
	let { company_email, password } = req.body;

	if (!company_email || !password) {
		res
			.status(401)
			.json({ message: "email and password are both required to login" });
	} else {
		Companies.findBy({ company_email })
			.first()
			.then(company => {
				if (company && bcrypt.compareSync(password, company.password)) {
					const token = signToken(company); // <<<<<<<<<<<

					res.status(200).json({ company, token }); // <<<<<<<<<<
				} else {
					res.status(401).json({ message: "Invalid Credentials" });
				}
			})
			.catch(error => {
				res.status(500).json(error);
			});
	}
});

//GET LIST OF ALL COMPANIES
router.get("/", (req, res) => {
	Companies.find()
		.then(companies => {
			res.json(companies);
		})
		.catch(err => res.send(err));
});

//GET COMPANY BY ID
router.get("/:id", async (req, res) => {
	const profile = await Companies.findById(req.params.id);
	if (profile) {
		res.status(200).json(profile);
	} else {
		console.log("error in GET api/companies/id");
		res
			.status(500)
			.json({ error: "The companies information could not be retrieved." });
	}
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Companies.update(id, changes)
		.then(company => {
			if (company) {
				res.json({ update: company });
			} else {
				res
					.status(404)
					.json({ message: `Could not find company with id:${id}` });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: `Failed to update company with id:${id}` });
		});
});

// DELETE A COMPANY
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Companies.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res
					.status(404)
					.json({ message: `Could not the company with id:${id}` });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: `Failed to delete company with id:${id}` });
		});
});
module.exports = router;
