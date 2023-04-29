const router = require("express").Router();
const { getAdmins, getUserPerformance } = require("../Controller/management");

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

module.exports = router;
