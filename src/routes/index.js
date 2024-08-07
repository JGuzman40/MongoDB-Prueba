const { Router } = require("express");
const usersController = require("../controllers/usersConstroller");
const vehiclesController = require("../controllers/vehiclesController");
const validateId = require("../middleware/validateId");

const router = Router();

router.get("/users", usersController.getUsers);
router.get("/users/byName", usersController.getUserByName);
router.get("/users/:id", validateId, usersController.getUserById);
router.post("/users", usersController.createUser);
router.put("/users/addVehicle", usersController.addVehicle);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

router.get("/vehicles", vehiclesController.getAllVehicles);
router.post("/vehicles", vehiclesController.createVehicle);

module.exports = router;