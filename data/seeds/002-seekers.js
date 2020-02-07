const { jwt } = require("../../config/secrets.js");
const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("seekers")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("seekers").insert([
				{
					id: 1,
					username: "seeker1",
					full_name: "sponge bob",
					seekers_email: "sponge@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "developer",
					seekers_location: "NewYork",
					education: "bachelor",
					experienced: false,
					skills: "React,Node",
					salary_sought: 80000,
					employment_type_sought: "full-time",
					isCompany: false
				},
				{
					id: 2,
					username: "seeker2",
					full_name: "patrick star",
					seekers_email: "star@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "developer",
					seekers_location: "NewYork",
					education: "bachelor",
					experienced: false,
					skills: "React,Node,Python",
					salary_sought: 60000,
					employment_type_sought: "full-time",
					isCompany: false
				},
				{
					id: 3,
					username: "seeker3",
					full_name: "sandy squirrel",
					seekers_email: "squirrel@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "developer",
					seekers_location: "NewYork",
					education: "Vocational",
					experienced: false,
					skills: "Ruby,SQL,Node,HTML,CSS",
					salary_sought: 70000,
					employment_type_sought: "full-time",
					isCompany: false
				},
				{
					id: 4,
					username: "seeker4",
					full_name: "user1 test1",
					seekers_email: "test1@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "doctor",
					seekers_location: "Texas",
					education: "Masters",
					experienced: true,
					skills: "cosmetic-surgery",
					salary_sought: 140000,
					employment_type_sought: "full-time",
					isCompany: false
				},
				{
					id: 5,
					username: "seeker5",
					full_name: "user2 test2",
					seekers_email: "test2@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "doctor",
					seekers_location: "Texas",
					education: "Masters",
					experienced: false,
					skills: "cardiac-surgery",
					salary_sought: 120000,
					employment_type_sought: "part-time",
					isCompany: false
				},
				{
					id: 6,
					username: "seeker6",
					full_name: "user3 test3",
					seekers_email: "test3@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "nurse",
					seekers_location: "California",
					education: "Masters",
					experienced: false,
					skills: "ekg,basic life support,",
					salary_sought: 100000,
					employment_type_sought: "part-time",
					isCompany: false
				},
				{
					id: 7,
					username: "seeker7",
					full_name: "user4 test4",
					seekers_email: "test4@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "engineer",
					seekers_location: "Colorado",
					education: "bachelor",
					experienced: false,
					skills: "advanced mathematics, metallurgy, physics",
					salary_sought: 100000,
					employment_type_sought: "part-time",
					isCompany: false
				},
				{
					id: 8,
					username: "seeker8",
					full_name: "user5 test5",
					seekers_email: "test5@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "teacher",
					seekers_location: "Alaska",
					education: "bachelor",
					experienced: true,
					skills: "public speaking",
					salary_sought: 80000,
					employment_type_sought: "full-time",
					isCompany: false
				},
				{
					id: 9,
					username: "seeker9",
					full_name: "user6 test6",
					seekers_email: "test6@mail",
					password: bcrypt.hashSync("pass1", 3),
					occupation: "teacher",
					seekers_location: "Alaska",
					education: "vocational",
					experienced: true,
					skills: "powerpoint",
					salary_sought: 50000,
					employment_type_sought: "full-time",
					isCompany: false
				}
			]);
		});
};
