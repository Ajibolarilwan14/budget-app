const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const budgetController = require("../controllers/budgetController");
const userController = require("../controllers/usersController");

// main routes
router.get("/", mainController.homepage);
router.get("/about", mainController.about);
router.get("/contact-us", mainController.contactUs);

// budget routes
router.get("/budget", budgetController.showBudgets);
router.get("/budget/add", budgetController.addBudget);
router.post("/budget/add", budgetController.saveBudget);

router.get("/budget/edit/:id", budgetController.editBudget);
router.post("/budget/edit/:id", budgetController.updateBudget);

router.get("/budget/delete/:id", budgetController.deleteBudget);

// login, logout and signup routes
router.get("/users/register", userController.register);
router.post("/users/create", userController.registerUser);


module.exports = router;
