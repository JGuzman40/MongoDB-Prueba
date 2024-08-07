const usersService = require("../services/userService");
const catchAsync = require("../utils/CatchAsync");
    
const getUsers = async (req, res) => {
    const users = await usersService.getUsers();
    res.status(200).json(users);
};

const getUserByName =  async (req, res) => {
    const { name } = req.body;
    const user = await usersService.getUserByName(name);
    res.status(200).json(user);
};

const getUserById = async (req, res) =>{
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    res.status(200).json(user);
};

const createUser = async (req, res) => {
    const { name, email, age } = req.body;
    const newUser = await usersService.createUser({ name, email, age });
    res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const updateUser = await usersService.updateUser(id, userData);
    res.status(200).json(updateUser);
    };

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deleteUser = await usersService.deleteUser(id);
    res.status(200).json({ message: `"user ${deleteUser} deleted successfully"` });
    };

const addVehicle = async (req, res) => {
    const { userId, vehicleId } = req.body;
    await usersService.addVehicle({ userId, vehicleId });
    res.status(200).json({ message: "Usuario con vehículo"});
};

module.exports = {
    getUsers: catchAsync(getUsers),
    getUserByName: catchAsync(getUserByName),
    getUserById: catchAsync(getUserById),
    createUser: catchAsync(createUser),
    updateUser: catchAsync(updateUser),
    deleteUser: catchAsync(deleteUser),
    addVehicle: catchAsync(addVehicle),    
};