const { jwt } = require("../../config/secrets.js");
const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("companies")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("companies").insert([
				{
					id: 1,
					company_name: "comp1",
					company_email: "comp1@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "NewYork",
					industry_type: "medical",
					isCompany: true
				},
				{
					id: 2,
					company_name: "comp2",
					company_email: "comp2@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "NewYork",
					industry_type: "medical",
					isCompany: true
				},
				{
					id: 3,
					company_name: "comp3",
					company_email: "comp3@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "NewYork",
					industry_type: "medical",
					isCompany: true
				},
				{
					id: 4,
					company_name: "comp4",
					company_email: "comp4@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "Texas",
					industry_type: "Tech",
					isCompany: true
				},
				{
					id: 5,
					company_name: "comp5",
					company_email: "comp5@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "Texas",
					industry_type: "Tech",
					isCompany: true
				},
				{
					id: 6,
					company_name: "comp6",
					company_email: "comp6@email",
					password: bcrypt.hashSync("pass1", 3),
					companies_location: "Arizona",
					industry_type: "education",
					isCompany: true
				}
			]);
		});
};
