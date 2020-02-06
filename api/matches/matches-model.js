const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	findJobs,
	findSeeker,
	faveOfSeeker,
	faveOfComp
};

function add(match) {
	return db("matches")
		.insert(match)
		.then(([id]) => id);
}

// return db("matches")
// 		.select()
// 		.where("matches.seekers_id", id)
// 		.orWhere("fave_of_seeker", true)
// 		.join("seekers", "matches.seekers_id", "seekers.id")
// 		.join("joblisting", "matches.joblisting_id", "joblisting.id");

function find() {
	return db("matches")
		.select(
			"matches.id",
			"matches.fave_of_seeker",
			"matches.fave_for_job",
			"matches.matched_occupation",
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
		.join("seekers", "matches.seekers_id", "seekers.id")
		.join("joblisting", "matches.joblisting_id", "joblisting.id");
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

// select *
// from matches
// join joblisting on  matches.joblisting_id = joblisting.id
// join seekers on matches.seekers_id = seekers.id
// where seekers.id =1

async function faveOfSeeker(id) {
	return db("matches")
		.select(
			"matches.id",
			"matches.fave_of_seeker",
			"matches.fave_for_job",
			"matches.matched_occupation",
			"matches.seekers_id",
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
		.join("seekers", "matches.seekers_id", "seekers.id")
		.join("joblisting", "matches.joblisting_id", "joblisting.id")
		.where("matches.seekers_id", id)
		.where("matches.fave_of_seeker", true);
}

// select *
// from matches
// join joblisting on  matches.joblisting_id = joblisting.id
// join seekers on matches.seekers_id = seekers.id
// where matches.joblisting_id =3
async function faveOfComp(id) {
	return db("matches")
		.select(
			"matches.id",
			"matches.fave_of_seeker",
			"matches.fave_for_job",
			"matches.matched_occupation",
			"matches.joblisting_id",
			"seekers.id as seekers_id",
			"seekers.full_name",
			"seekers.occupation",
			"seekers.seekers_location",
			"seekers.education",
			"seekers.experienced",
			"seekers.skills"
		)
		.join("seekers", "matches.seekers_id", "seekers.id")
		.join("joblisting", "matches.joblisting_id", "joblisting.id")
		.where("matches.joblisting_id", id)
		.where("matches.fave_of_seeker", true);
}
// .where("matches.joblisting_id", id);

function remove(id) {
	return db("matches")
		.where("id", id)
		.del();
}
