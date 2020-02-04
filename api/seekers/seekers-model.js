const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	update
};

function find() {
	return db("seekers");
}

function findBy(filter) {
	return db("seekers").where(filter);
}

async function add(seeker) {
	const [id] = await db("seekers").insert(seeker);

	return findById(id);
}

function findById(id) {
	return db("seekers")
		.where({ id })
		.first();
}

function remove(id) {
	return db("seekers")
		.where("id", id)
		.del();
}

async function update(seeker) {
	await db("seekers")
		.update(seeker)
		.where({ id: seeker.id });
}
