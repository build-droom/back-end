const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findJobs,
	findBy,
	findById,
	findJobById,
	findAllJobByCompanyId,
	remove,
	findCompanyById,
	update
};

async function add(company) {
	const [id] = await db("companies").insert(company);

	return findById(id);
}

function find() {
	return db("companies").select("id", "company_email", "password");
}

function findJobs() {
	return db("joblisting").select("id", "job_title", "company", "job_location");
}

function findBy(filter) {
	return db("companies").where(filter);
}

function findById(id) {
	return db("companies")
		.where({ id })
		.first();
}
function findJobById(id) {
	return db("joblisting")
		.where({ id })
		.first();
}

function findAllJobByCompanyId(id) {
	return db("joblisting")
		.where("company_id", id)
		.first();
}

function findCompanyById(id) {
	return db("companies")
		.join("joblisting", "joblisting.companies_id", "companies.id")
		.select(
			"companies.*",
			"joblisting.job_tile as joblisting_position",
			"joblisting.id"
		)
		.where("companies.id", id);
}

function remove(id) {
	return db("companies")
		.where("id", id)
		.del();
}

async function update(company) {
	await db("companies")
		.update(company)
		.where({ id: company.id });
}
