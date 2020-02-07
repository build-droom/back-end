const server = require("../server.js");
const request = require("supertest");
const db = require("../../data/dbConfig.js");

describe("test environment", function() {
	it("should use the testing environment", function() {
		expect(process.env.DB_ENV).toBe("testing");
	});
});

// describe("get functionality", () => {
// 	it("should return 200 when successful", async () => {
// 		const res = await request(server).get("/api/jobs");
// 		expect(res.status).toBe(200);
// 	});

// 	it("should return json", async () => {
// 		const res = await request(server)
// 			.get("/api/jobs")
// 			.expect("Content-Type", /json/);
// 	});
// });

// describe("get joblisting with specific id functionality", () => {
// 	it("should return 200 when successful", async () => {
// 		const res = await request(server).get("/api/jobs/2");
// 		expect(res.status).toBe(200);
// 	});

// 	it("should return json", async () => {
// 		const res = await request(server)
// 			.get("/api/jobs/2")
// 			.expect("Content-Type", /json/);
// 	});
// });

// describe("get joblisting listings from company with specific id functionality", () => {
// 	it("should return 404 when successful but referring to non existent listing", async () => {
// 		const res = await request(server).get("/api/jobs/companies/3");
// 		expect(res.status).toBe(404);
// 	});

// 	it("should return a truthy response", async () => {
// 		const res = await request(server).get("/api/jobs/2");
// 		expect(res.status).toBeTruthy;
// 	});
// });

// describe("post functionality", () => {
// 	it("should return 201 when successful", async () => {
// 		const res = await request(server)
// 			.post("/api/jobs")
// 			.send({
// 				companies_id: 1,
// 				job_position: "nurse",
// 				company: "comp1",
// 				description: "work in hospital",
// 				job_location: "Nevada",
// 				education_required: null,
// 				experience_required: null,
// 				skills_required: null,
// 				salary: 70000,
// 				employment_type: "full-time"
// 			});
// 		expect(res.status).toBe(201);
// 	});

// 	it("should return json", async () => {
// 		const res = await request(server)
// 			.post("/api/jobs")
// 			.send({
// 				companies_id: 1,
// 				job_position: "nurse",
// 				company: "comp1",
// 				description: "work in hospital",
// 				job_location: "Nevada",
// 				education_required: null,
// 				experience_required: null,
// 				skills_required: null,
// 				salary: 70000,
// 				employment_type: "full-time"
// 			});
// 		expect(res.status).toBeTruthy;
// 	});
// });

// describe("Update joblisting listings with specific id", () => {
// 	it("should return 200 when successful", async () => {
// 		const res = await request(server)
// 			.put("/api/jobs/1")
// 			.send({
// 				companies_id: 1,
// 				job_position: "nurse",
// 				company: "comp1",
// 				description: "work in hospital xxxx edited",
// 				job_location: "Nevada",
// 				education_required: null,
// 				experience_required: null,
// 				skills_required: null,
// 				salary: 70000,
// 				employment_type: "full-time"
// 			});
// 		expect(res.status).toBe(200);
// 	});

// 	it("should return a truthy response", async () => {
// 		const res = await request(server).post("/api/jobs/1");
// 		expect(res.status).toBeTruthy;
// 	});
// });

// describe("delete functionality", () => {
// 	it("should return res.type application/json", async () => {
// 		const res = await request(server).delete("/api/jobs/3");

// 		expect(res.type).toBe("application/json");
// 	});

// 	it("should return res.status 404 when object to delete does not exist", async () => {
// 		const res = await request(server).delete("/api/jobs/17");
// 		console.log(res.body);
// 		expect(res.status).toBe(404);
// 	});
// });
