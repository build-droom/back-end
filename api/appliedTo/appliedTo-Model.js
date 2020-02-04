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
	return db("appliedTo")
		.insert(job, "id")
		.then(ids => ({ id: ids[0] }));
}

async function add(apply) {
	const [id] = await db("appliedTo").insert(apply);

	return findById(id);
}

function find() {
	return db("appliedTo");
}

function findBy(filter) {
	return db("appliedTo").where(filter);
}

function findById(id) {
	return db("appliedTo")
		.where({ id })
		.first();
}

function findJobById(id) {
	return db("appliedTo").where({ companies_id: id });
}

function findCompanyById(id) {
	return db("appliedTo")
		.join("joblisting", "joblisting.companies_id", "companies.id")
		.select(
			"companies.*",
			"joblisting.job_tile as joblisting_position",
			"joblisting.id"
		)
		.where("companies.id", id);
}

function remove(id) {
	return db("appliedTo")
		.where("id", id)
		.del();
}

function update(id, changes) {
	return db("appliedTo")
		.where({ id })
		.update(changes);
}
