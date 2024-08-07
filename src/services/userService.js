const { addVehicle } = require("../controllers/usersConstroller");
const User = require("../models/User");

module.exports = {
    getUsers: async () => {
        const users = await User.find().populate("vehicle");
        return users;
    },

    getUserByName: async (name) => {
        const user = await User.findOne({ name });
        return user;
    },

    getUserById: async (id) => {
        const user = await User.findById(id);
        return user;
    },

    createUser: async (user) => {
        const newUser = await User.create(user);
        return newUser;
    },

    updateUser: async (id, userData) => {
        const updateUser = await User.findByIdAndUpdate(id, userData, { new: true });
        return updateUser;
    },

    deleteUser: async (id) => {
        const deleteUser = await User.findByIdAndDelete(id);
        return deleteUser;
    },

    addVehicle: async ({ userId, vehicleId }) => {
        const user = await User.findById(userId);
        user.vehicle = vehicleId;
        await user.save();
        return user;
    } 
};