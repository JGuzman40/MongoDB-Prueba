const vehicleService = require("../services/vehicleService");
const catchAsync = require("../utils/CatchAsync");

const getAllVehicles = async (req, res) => {
    const vehicles = await vehicleService.getAllVehicles();
    res.status(200).json(vehicles);
};

const createVehicle = async (req, res) => {
    const { patente, marca } = req.body;
    const newVehicle = await vehicleService.createVehicle({ patente, marca });
    res.status(201).json(newVehicle);
};

module.exports = {
    getAllVehicles: catchAsync(getAllVehicles),
    createVehicle: catchAsync(createVehicle),
}