const server = require("../server.js");
const request = require("supertest");
const db = require("../../data/dbConfig.js");

describe("register to /api/seekers", function() {
	beforeEach(async () => {
		await db("seekers").truncate;
	});
	//Make a post request
	it("should register the new job seeker", async () => {
		let res = await request(server)
			.post("/api/seekers/register")
			.send({
				username: "test01",
				full_name: "for testing1",
				password: "pass1",
				seekers_email: "user1@test",
				occupation: "tester"
			})
			.then(res => {
				expect(res.status).toBe(201);
			});
	});
	it("should register the new job seeker and get res.status less than 202 :) its 201 to be exact", async () => {
		let res = await request(server)
			.post("/api/seekers/register")
			.send({
				username: "test01",
				full_name: "for testing1",
				password: "pass1",
				seekers_email: "user1@test",
				occupation: "tester"
			})
			.then(res => {
				expect(res.status).toBeLessThan(202);
			});
	});
});

describe("register to /api/seekers", function() {
	//Login
	it("should login with correct creds", async () => {
		let res = await request(server)
			.post("/api/seekers/login")
			.send({
				username: "test01",
				password: "pass1"
			})
			.then(res => {
				expect(res.status).toBe(200);
			});
	});
});
