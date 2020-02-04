exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("appliedTo")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("appliedTo").insert([
				{ id: 1, joblisting_id: 6, seekers_id: 8 }
			]);
		});
};
