const { Router } = require("express");
const usersController = require("../controllers/usersConstroller");

const router = Router();

router.get("/users", usersController.getUsers);
router.get("/users/byName", usersController.getUserByName);
router.get("/users/:id", usersController.getUserById);
router.post("/users", usersController.createUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;