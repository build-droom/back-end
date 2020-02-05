exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("matches")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("matches").insert([
				{
					id: 1,
					seekers_id: 6,
					joblisting_id: 2,
					fave_of_seeker: true,
					fave_for_job: false,
					matched_occupation: true
				},
				{
					id: 2,
					seekers_id: 1,
					joblisting_id: 3,
					fave_of_seeker: true,
					fave_for_job: false,
					matched_occupation: true
				},
				{
					id: 3,
					seekers_id: 8,
					joblisting_id: 6,
					fave_of_seeker: true,
					fave_for_job: false,
					matched_occupation: true
				},
				{
					id: 4,
					seekers_id: 8,
					joblisting_id: 6,
					fave_of_seeker: false,
					fave_for_job: true,
					matched_occupation: true
				},
				{
					id: 5,
					seekers_id: 9,
					joblisting_id: 6,
					fave_of_seeker: false,
					fave_for_job: true,
					matched_occupation: true
				}
			]);
		});
};
