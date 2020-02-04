const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	findMatch
};

async function add(match) {
	const [id] = await db("matches").insert(match);

	return findById(id);
}

function find() {
	return db("matches");
}

function findBy(filter) {
	return db("matches").where(filter);
}

function findById(id) {
	return db("matches")
		.where({ id })
		.first();
}

// function findSteps(id) {
//     return db("schemes")
//     .join("steps", "schemes.id", "steps.scheme_id")
//     .select("steps.id","schemes.scheme_name", "steps.step_number", "steps.instructions")
//     .where(".steps.scheme_id", id);

function findMatch(id) {
	return db("seekers")
		.where("seekers.id", id)
		.join("joblisting", "joblisting.job_position", "seekers.occupation")
		.select();
}

function remove(id) {
	return db("matches")
		.where("id", id)
		.del();
}
