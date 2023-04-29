const router = require("express").Router();
const { getSales } = require("../Controller/sales");

router.get("/sales", getSales);

module.exports = router;
