const server = require("../server.js");
const request = require("supertest");
const db = require("../../data/dbConfig.js");

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
				company_email: "comp1@email",
				password: "pass1"
			});
		expect(res.status).toBe(200);
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

	// it("should return status 401 when entering incorrect creds", async () => {
	// 	const res = await request(server)
	// 		.post("/api/companies/login")
	// 		.send({
	// 			company_email: "not-email",
	// 			password: "pass3"
	// 		});
	// 	expect(res.status).toBe(401);
	// });
});
