const express = require("express");
const router = express.Router();
const {
    getAll,
    postCustomer,
    deleteCustomer,
    updateCustomer,
    saveCostumer,
} = require("../controllers/customer");

// Get all customers
router.get("/", getAll);

// Post a customer
router.post("/add", postCustomer);

//delete a costumer
router.get("/delete/:id", deleteCustomer);

// update a customer
router.get("/update/:id", updateCustomer);
router.post("/update/:id", saveCostumer);
module.exports = router;
