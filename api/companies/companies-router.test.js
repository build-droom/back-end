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
	it("should return status 401 without authentication", async () => {
		const res = await request(server).get("/api/companies");
		({
			company_email: "comp1",
			password: "pass1"
		});
		expect(res.status).toBe(401);
	});

	it("should be a json response", async () => {
		const res = await request(server).get("/api/companies");

		expect(res.type).toBe("application/json");
	});
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
		expect(res.status).toBe(401);
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
		console.log(res2.body);
	});
});

describe("put functionality", () => {
	it("should return status 401 when sent without a token", async () => {
		const res = await request(server).put("/api/companies/1");
		expect(res.status).toBe(401);
	});

	// it("should return status  when sent with a token", async () => {
	// 	const res = await request(server)
	// 		.post("/api/companies/login")
	// 		.send({
	// 			company_email: "comp1@email",
	// 			password: "pass1"
	// 		});
	// 	const res2 = await request(server)
	// 		.put("/api/companies/1")
	// 		.set("authorization", res.body.token);
	// 	// console.log(res2.body);
	// 	expect(res.type).toBe(/json/i);
	// });
});
