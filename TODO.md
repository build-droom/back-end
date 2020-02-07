make a route to get saved matches based on seeker or job id, depending on who saved it.
make a route for saved applications
trim down the returned data from matches

some legacy code to preserve in case of changes:

// async function update(seeker) {
// await db("seekers")
// .update(seeker)
// .where({ id: seeker.id });
// }

//////////////////////////

// router.put("/:id", restrict, async (req, res) => {
// const {
// id,
// username,
// full_name,
// seekers_email,
// occupation,
// seekers_location,
// education,
// experienced
// } = req.body;

// if (
// !id ||
// !username ||
// !full_name ||
// !seekers_email ||
// !occupation ||
// !seekers_location ||
// !education ||
// !experienced
// ) {
// res.status(400).json({
// message:
// "Make sure username, full_name, seekers_email,occupation,seekers_location, education, experienced are included"
// });
// }
// try {
// const seeker = await Seekers.findById(req.params.id);

// if (!seeker)
// return res.status(404).json({
// message: "Profile doesn't exist"
// });

// const updatedSeeker = await Seekers.update(req.body);

// res.status(200).json(updatedSeeker);
// } catch (err) {
// res.status(500).json({
// message: " Something went wrong while updating"
// });
// }
// });
////////////////////////////

//UPDATE A SPECIFIC COMPANY
// router.put("/:id", async (req, res) => {
// const {
// id,
// company_name,
// company_email,
// password,
// companies_description,
// companies_location,
// industry_type
// } = req.body;

// if (
// !id ||
// !company_name ||
// !company_email ||
// !password ||
// !companies_description ||
// !companies_location ||
// !industry_type
// ) {
// res.status(400).json({
// message: "Missing data in request."
// });
// }
// try {
// const company = await Companies.findById(req.params.id);

// if (!company)
// return res.status(404).json({
// message: " Company Profile doesn't exist"
// });

// const updatedComp = await Companies.update(req.body);

// res.status(200).json(updatedComp);
// } catch (err) {
// res.status(500).json({
// message: " Something went wrong while updating company."
// });
// }
// });
