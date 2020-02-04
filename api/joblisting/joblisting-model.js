const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	findCompanyById
};

async function add(job) {
	const [id] = await db("joblisting").insert(job);

	return findById(id);
}

function find() {
	return db("companies").select("id", "company_email", "password");
}

function findBy(filter) {
	return db("joblisting").where(filter);
}

function findById(id) {
	return db("joblisting")
		.where({ id })
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
	return db("joblisting")
		.where("id", id)
		.del();
}
