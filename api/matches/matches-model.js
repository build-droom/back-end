const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	findJobs,
	findSeeker,
	faveOfSeeker
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

function findJobs(id) {
	return db("joblisting")
		.where("seekers.id", id)
		.join("seekers", "joblisting.job_position", "seekers.occupation")
		.select();
}

function findSeeker(id) {
	return db("seekers")
		.select()
		.where("joblisting.id", id)
		.join("joblisting", "joblisting.job_position", "seekers.occupation")
		.select();
}

// select *
// from matches
// join seekers on matches.seekers_id = seekers.id
//where
// join joblisting on matches.joblisting_id = joblisting.id
// where ( "fave_of_seeker"="true" and "joblisting_id"=4)

//need to fix
async function faveOfSeeker(id) {
	return db("matches")
		.select()
		.where({ "matches.joblisting_id": id, fave_of_seeker: "true" })
		.join("seekers", "matches.seekers_id", "seekers.id")
		.join("joblisting", "matches.joblisting_id", "joblisting.id");

	// .where("seekers.id", id, "fave_of_seeker", "true");
}

function remove(id) {
	return db("matches")
		.where("id", id)
		.del();
}
