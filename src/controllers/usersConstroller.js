const usersService = require("../services/userService");

module.exports = {
    
    getUsers: async (req, res) => {
        const users = await usersService.getUsers();
        res.status(200).json(users);
    },

    getUserByName: async (req, res) => {
        const { name } = req.body;
        const user = await usersService.getUserByName(name);
        res.status(200).json(user);
    },

    getUserById: async(req, res) =>{
        const { id } = req.params;
        const user = await usersService.getUserById(id);
        res.status(200).json(user);
        
    },

    createUser: async (req, res) => {
        const { name, email, age } = req.body;
        const newUser = await usersService.createUser({ name, email, age });
        res.status(201).json(newUser);
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const userData = req.body;
        const updateUser = await usersService.updateUser(id, userData);
        if (updateUser) {
            res.status(200).json(updateUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        const deleteUser = await usersService.deleteUser(id);
        if (deleteUser) {
            res.status(200).json({ message: "user deleted successfully" });
        } else {
            res.status(404).json({ message: "user not found" });
        }
    },
};