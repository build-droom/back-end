exports.up = async function(knex) {
	await knex.schema.createTable("companies", tbl => {
		tbl.increments();
		tbl
			.string("company_name", 128)
			.notNullable()
			.unique();
		tbl
			.string("company_email", 50)
			.notNullable()
			.unique();
		tbl.string("password", 50).notNullable();
		tbl.string("companies_description", 500);
		tbl.string("companies_location", 128).notNullable();
		tbl.string("industry_type", 128).notNullable();
		tbl.boolean("isCompany").defaultTo(true);
		tbl.datetime("createdOn").defaultTo(knex.fn.now());
	});

	await knex.schema.createTable("seekers", tbl => {
		tbl.increments();
		tbl.string("username", 50).notNullable();

		tbl.string("full_name", 50).notNullable();

		tbl.string("seekers_email", 50).notNullable();
		tbl.string("password", 50).notNullable();
		tbl.string("occupation", 50).notNullable();
		tbl.string("seekers_location", 50).notNullable();
		tbl.string("education", 128).notNullable();
		tbl.boolean("experienced").defaultTo(false);
		tbl.string("skills", 200);
		tbl.integer("salary_sought");
		tbl.string("employment_type_sought"); //full-time or part-time
		tbl.boolean("isCompany").defaultTo(false);
		tbl.datetime("createdOn").defaultTo(knex.fn.now());
	});

	await knex.schema.createTable("joblisting", tbl => {
		tbl.increments();
		tbl
			.integer("seekers_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("seekers"),
			tbl
				.integer("companies_id")
				.notNullable()
				.unsigned()
				.references("id")
				.inTable("companies");
		tbl.string("job_title", 50).notNullable();
		tbl.string("company", 50).notNullable();
		tbl.string("description", 300);
		tbl.string("job_location", 50);
		tbl.string("education_required", 128); // high school grad, vocational, bachelors, masters
		tbl.boolean("experience_required").defaultTo(false);
		tbl.string("skills_required", 128);
		tbl.integer("salary");
		tbl.string("employment_type"); //full-time or part-time
		tbl.datetime("createdOn").defaultTo(knex.fn.now());
	});

	await knex.schema.createTable("matches", tbl => {
		tbl.increments();
		tbl
			.integer("seekers_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("seekers");
		tbl
			.integer("joblisting_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("joblisting");
		tbl.boolean("liked_by_seeker").defaultTo(true);
		tbl.boolean("liked_by_company").defaultTo(true);
	});

	await knex.schema.createTable("favorites", tbl => {
		tbl.increments();
		tbl
			.integer("seekers_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("seekers");

		tbl
			.integer("joblisting_id")
			.notNullable()
			.unsigned()
			.references("id")
			.inTable("joblisting");
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("favorites");
	await knex.schema.dropTableIfExists("matches");
	await knex.schema.dropTableIfExists("joblisting");
	await knex.schema.dropTableIfExists("seekers");
	await knex.schema.dropTableIfExists("companies");
};
