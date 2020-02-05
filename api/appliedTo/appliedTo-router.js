const db = require("../../data/dbConfig.js");
const router = require("express").Router();

const Apply = require("./appliedTo-model.js");

const restrict = require("../authenticate-middleware.js");

//saving a record that user applied
//need to test

router.post("/", restrict, (req, res) => {
	const apply = req.body;
	db("appliedTo")
		.insert(apply)
		.then(applies => {
			res.status(201).json(applies);
		})
		.catch(err => {
			console.log(err);
		});
});

//GET requests to /api/apply returns list of all application logs
router.get("/", restrict, (req, res) => {
	Apply.find()
		.then(apply => {
			res.json(apply);
		})
		.catch(err => {
			console.log(err, "error in appliedTo-router /get");
			res.send(err);
		});
});

//GET by id /api/apply:id
router.get("/:id", async (req, res) => {
	const apply = await Apply.findById(req.params.id);
	if (apply) {
		res.status(200).json(apply);
	} else {
		console.log("error in GET api/appliedTo/:id");
		res
			.status(500)
			.json({ error: "You did not reach out to this jobseeker or company." });
	}
});

// //GET by id /api/apply/:id
// router.get("/:id", async (req, res) => {
// 	const apply = await Apply.findJobById(req.params.id);
// 	if (apply) {
// 		res.status(200).json(apply);
// 	} else {
// 		console.log("error in GET api/apply/:id");
// 		res
// 			.status(500)
// 			.json({ error: "The application information could not be retrieved." });
// 	}
// });

// deleting a joblisting
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	Apply.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: "Cannot delete application info" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to delete application log" });
		});
});

//put request to api/apply
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	db("appliedTo")
		.where({ id })
		.update(changes)
		.then(apply => {
			if (apply) {
				res.json({ update: apply });
			} else {
				res
					.status(404)
					.json({ message: "Could not find application log with given id" });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to update application log" });
		});
});

module.exports = router;
