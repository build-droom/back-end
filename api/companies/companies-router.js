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
router.get("/", restrict, (req, res) => {
	Companies.find()
		.then(companies => {
			res.json(companies);
		})
		.catch(err => res.send(err));
});

//GET requests to /api/companies/jobs returns list of ALL joblisting
router.get("/jobs", (req, res) => {
	Companies.findJobs()
		.then(jobs => {
			res.json(jobs);
		})
		.catch(err => res.send(err));
});

//GET by id /api/companies/jobs/:id joblisting
router.get("/jobs/:id", async (req, res) => {
	const job = await Companies.findJobById(req.params.id);
	if (job) {
		res.status(200).json(job);
	} else {
		console.log("error in GET api/companies/jobs/:id");
		res
			.status(500)
			.json({ error: "The joblisting information could not be retrieved." });
	}
});

//get by id /api/companies/issued/:id joblisting based on comp id
router.get("/jobs/issued/:id", async (req, res) => {
	const job = await Companies.findAllJobById(req.params.id);
	if (job) {
		res.status(200).json(job);
	} else {
		console.log("error in GET api/companies/jobs/issued/:id");
		res
			.status(500)
			.json({ error: "The joblisting information could not be retrieved." });
	}
});

//get by id /api/companies/:id
router.get("/:id", restrict, async (req, res) => {
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
module.exports = router;
