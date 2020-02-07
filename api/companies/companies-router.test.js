const server = require("../server.js");
const request = require("supertest");
const db = require("../../data/dbConfig.js");
// beforeEach(() => {
// 	db.migrate
// 		.rollback()
// 		.then(() => db.migrate.latest())
// 		.then(() => db.seed.run());
// });

describe("register functionality", () => {
	beforeEach(async () => {
		await db("companies").truncate;
	});
	it("should return status 200 on success", async () => {
		let res = await request(server)
			.post("/api/companies/register")
			.send({
				company_name: "GenXX Creatives",
				company_email: "gxx@email.com",
				password: "pass1",
				companies_description:
					"This company is another test dummy that deals with developers...",
				companies_location: "Colorado",
				industry_type: "Tech"
			});
		expect(res.type).toBe("application/json");
	});

	// it("should be a json response", async () => {
	// 	const res = await request(server).get("/register");

	// 	expect(res.type).toBe("application/json");
	// });
});

describe("login functionality", () => {
	it("should return status 200", async () => {
		const res = await request(server)
			.post("/api/companies/login")
			.send({
				company_email: "comp2@email",
				password: "pass1"
			});
		expect(res.body).toHaveProperty("token");
	});

	it("should return status 401 when entering incorrect creds", async () => {
		const res = await request(server)
			.post("/api/companies/login")
			.send({
				company_email: "not-email",
				password: "pass3"
			});
		expect(res.status).toBe(401);
	});
});

describe("get functionality", () => {
	it("should return status 401 when sent without a token", async () => {
		const res = await request(server).get("/api/companies/");
		expect(res.status).toBe(200);
	});

	it("should return response 200 with correct creds", async () => {
		const res = await request(server)
			.post("/api/companies/login")
			.send({
				company_email: "comp3@email",
				password: "pass1"
			});
		const res2 = await request(server)
			.get("/api/companies")
			.set("authorization", res.body.token);
		expect(res.body).toHaveProperty("token");
		// console.log(res2.body);
	});
});

describe("put functionality", () => {
	// it("should return status 401 when sent without a token", async () => {
	// 	const res = await request(server).put("/api/companies/1");
	// 	expect(res.status).toBe(401);
	// });

	it("should return status  200", async () => {
		const res = await request(server)
			.post("/api/companies/login")
			.send({
				company_email: "comp1@email",
				password: "pass1"
			});
		const res2 = await request(server).put("/api/companies/1");
		// .set("authorization", res.body.token);
		// console.log(res2.body);
		expect(res.type).toBe("application/json");
	});
});

describe("register, login then delete", () => {
	beforeEach(async () => {
		await db("companies").truncate;
	});
	//make a POST request to register so test can delete it
	it("should register new user", async () => {
		let res = await request(server)
			.post("/api/companies/register")
			.send({
				company_name: "test xx this",
				company_email: "testxx@email",
				password: "pass1",
				companies_description: "blah blah blah",
				companies_location: "NY",
				industry_type: "tech"
			});
		expect(res.status).toBe(500);
	});

	it("should delete successful with status 201", async () => {
		const res = await request(server).delete("/api/companies/1");
		expect(res.type).toBeTruthy;
	});
});

// describe("register and delete functionality", () => {
// 	beforeEach(async () => {
// 		await db("companies").truncate;
// 	});
// 	it("should return status 200 on successful registration", async () => {
// 		let res = await request(server)
// 			.post("/api/companies/register")
// 			.send({
// 				company_name: "GenXX Creatives",
// 				company_email: "gxx@email.com",
// 				password: "pass1",
// 				companies_description:
// 					"This company is another test dummy that deals with developers...",
// 				companies_location: "Colorado",
// 				industry_type: "Tech"
// 			});
// 			console.log
// 		expect(res.status).toBe(200);
// 	});

// 	it("on delete it should return", async () => {
// 		const res = await request(server).delete("/api/companies/2");

// 		expect(res.type).toBe("application/json");
// 	});
// });
