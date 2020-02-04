const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	findJobById,
	remove,
	findCompanyById,
	insert,
	update
};
function insert(job) {
	return db("joblisting")
		.insert(job, "id")
		.then(ids => ({ id: ids[0] }));
}

async function add(job) {
	const [id] = await db("joblisting").insert(job);

	return findById(id);
}

function find() {
	return db("joblisting");
}

function findBy(filter) {
	return db("joblisting").where(filter);
}

function findById(id) {
	return db("joblisting")
		.where({ id })
		.first();
}

function findJobById(id) {
	return db("joblisting").where({ companies_id: id });
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

function update(id, changes) {
	return db("joblisting")
		.where({ id })
		.update(changes);
}
