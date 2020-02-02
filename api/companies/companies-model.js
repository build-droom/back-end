const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove
};

async function add(company) {
	const [id] = await db("companies").insert(company);

	return findById(id);
}

function find() {
	return db("companies").select("id", "company_email", "password");
}

function findBy(filter) {
	return db("companies").where(filter);
}

function findById(id) {
	return db("companies")
		.where({ id })
		.first();
}

function remove(id) {
	return db("companies")
		.where("id", id)
		.del();
}
