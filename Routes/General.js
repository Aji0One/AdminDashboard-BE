const { getUser, getDashboardStats } = require("../Controller/general");

const router = require("express").Router();

router.get("/user/:id", getUser);

router.get("/dashboard", getDashboardStats);

module.exports = router;
