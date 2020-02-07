exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("appliedTo")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("appliedTo").insert([
				{
					id: 1,
					joblisting_id: 6,
					seekers_id: 8,
					sent_by_seeker: true,
					sent_by_company: false
				},
				{
					id: 2,
					joblisting_id: 1,
					seekers_id: 4,
					sent_by_seeker: false,
					sent_by_company: true
				}
			]);
		});
};
