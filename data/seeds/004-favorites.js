exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("favorites")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("favorites").insert([
				{ id: 1, seekers_id: 4, joblisting_id: 1 },
				{ id: 2, seekers_id: 1, joblisting_id: 4 },
				{ id: 3, seekers_id: 1, joblisting_id: 3 }
			]);
		});
};
