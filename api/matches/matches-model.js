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
		.select(
			"joblisting.id as joblisting_id",
			"joblisting.job_location",
			"joblisting.company",
			"joblisting.companies_id",
			"joblisting.job_position",
			"joblisting.company as company name",
			"joblisting.job_location",
			"joblisting.salary",
			"joblisting.employment_type",
			"seekers.id as seekers_id",
			"seekers.full_name",
			"seekers.occupation",
			"seekers.seekers_location",
			"seekers.education",
			"seekers.experienced",
			"seekers.skills"
		);
}

function findSeeker(id) {
	return db("seekers")
		.join("joblisting", "joblisting.job_position", "seekers.occupation")
		.select(
			"seekers.id as seekers_id",
			"seekers.full_name",
			"seekers.occupation",
			"seekers.seekers_location",
			"seekers.education",
			"seekers.experienced",
			"seekers.skills",
			"joblisting.id as joblisting_id",
			"joblisting.job_location",
			"joblisting.company",
			"joblisting.companies_id",
			"joblisting.job_position",
			"joblisting.company as company name",
			"joblisting.job_location",
			"joblisting.salary",
			"joblisting.employment_type"
		)
		.where("joblisting.id", id);
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
