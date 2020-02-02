const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { jwtSecret } = require("../../config/secrets.js");

const Companies = require("./companies-model.js");
const restricted = require("../authenticate-middleware.js");

// for endpoints beginning with /api/companies/register

router.post("/register", (req, res) => {
	let company = req.body;
	const hash = bcrypt.hashSync(company.password, 3); // 2 ^ n
	company.password = hash;

	Companies.add(company)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

// endpoint for login to /api/companies/login
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

//GET requests to /api/companies returns list of all companies
router.get("/", restricted, (req, res) => {
	Companies.find()
		.then(companies => {
			res.json(companies);
		})
		.catch(err => res.send(err));
});

function signToken(company) {
	const payload = {
		company
	};

	const options = {
		expiresIn: "1d"
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
