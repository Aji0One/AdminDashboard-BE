const router = require("express").Router();
const {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
} = require("../Controller/client");

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

module.exports = router;
