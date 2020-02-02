exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("joblisting")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("joblisting").insert([
				{
					id: 1,
					seekers_id: 4,
					companies_id: 1,
					job_title: "doctor",
					company: "comp1",
					description: "work in hospital",
					job_location: "NewYork",
					salary: 150000,
					employment_type: "full-time"
				},
				{
					id: 2,
					seekers_id: 6,
					companies_id: 1,
					job_title: "nurse",
					company: "comp1",
					description: "work in hospital",
					job_location: "NewYork",
					salary: 100000,
					employment_type: "full-time"
				},
				{
					id: 3,
					seekers_id: 6,
					companies_id: 4,
					job_title: "developer",
					company: "comp4",
					description: "blah blah blah",
					job_location: "Texas",
					salary: 100000,
					employment_type: "full-time"
				},
				{
					id: 4,
					seekers_id: 6,
					companies_id: 5,
					job_title: "developer",
					company: "comp5",
					description: "blah blah blah",
					job_location: "Texas",
					salary: 100000,
					employment_type: "part-time"
				},
				{
					id: 5,
					seekers_id: 6,
					companies_id: 5,
					job_title: "developer",
					company: "comp5",
					description: "blah blah blah",
					job_location: "Texas",
					salary: 100000,
					employment_type: "part-time"
				},
				{
					id: 6,
					seekers_id: 7,
					companies_id: 6,
					job_title: "teacher",
					company: "comp6",
					description: "be a teacher blah blah",
					job_location: "Arizona",
					salary: 100000,
					employment_type: "part-time"
				}
			]);
		});
};
