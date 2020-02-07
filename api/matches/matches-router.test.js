const server = require("../server.js");
const request = require("supertest");
const db = require("../../data/dbConfig.js");

// beforeEach(() => {
// 	db.migrate
// 		.rollback()
// 		.then(() => db.migrate.latest())
// 		.then(() => db.seed.run());
// });
describe("test environment", function() {
	it("should use the testing environment", function() {
		expect(process.env.DB_ENV).toBe("testing");
	});
});

// describe("get to api/matches functionality", () => {
// 	it("should return status 200 when successful", async () => {
// 		const res = await request(server).get("/api/matches");
// 		expect(res.status).toBe(200);
// 	});

// 	it("should be a json response", async () => {
// 		const res = await request(server).get("/api/matches");
// 		console.log(res.type, "TEST MATCHES LINE 21");
// 		expect(res.type).toBe("application/json");
// 	});
// });

// describe("get to api/matches/faveofseeker/:id functionality", () => {
// 	it("should return status of greater than 200 when trying to fetch a non existent entry", async () => {
// 		const res = await request(server).get("/api/matches/1");
// 		expect(res.status).toBeGreaterThan(200);
// 	});

// 	it("should be a text response", async () => {
// 		const res = await request(server).get("/api/matches/1");
// 		console.log(res.type, "TEST IN MATCHES LINE 33");
// 		expect(res.type).toBe("text/html");
// 		//message: 'Could not find a joblisting with given id'
// 	});

// 	it("should return 404 if no fave saved entry", async () => {
// 		const res = await request(server).get("/api/matches/3");

// 		expect(res.status).toBe(404);
// 	});
// });

// describe("PUT to api/matches/ functionality", () => {
// 	it("should return status 200 on success", async () => {
// 		const res = await request(server)
// 			.put("/api/matches/1")
// 			.send({
// 				id: 1,
// 				seekers_id: 3,
// 				joblisting_id: 2,
// 				fave_of_seeker: true,
// 				fave_for_job: true,
// 				matched_occupation: true
// 			});
// 		expect(res.status).toBe(200);
// 	});
// });

// describe("Post to api/matches/ functionality", () => {
// 	it("should return status of greater than 201 on successful entry save", async () => {
// 		const res = await request(server)
// 			.post("/api/matches")
// 			.send({
// 				seekers_id: 3,
// 				joblisting_id: 2,
// 				fave_of_seeker: true,
// 				fave_for_job: true,
// 				matched_occupation: true
// 			});
// 		expect(res.status).toBe(201);
// 	});
// });

// describe("DELETE to api/matches/id functionality", () => {
// 	it("should return status of greater than 404 when trying to delete a non existent entry", async () => {
// 		const res = await request(server).post("/api/matches/15");
// 		expect(res.status).toBe(404);
// 	});
// });
