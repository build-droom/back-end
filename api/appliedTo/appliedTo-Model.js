const db = require("../../data/dbConfig.js");

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	insert,
	update
};
function insert(apply) {
	return db("appliedTo")
		.insert(apply, "id")
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
