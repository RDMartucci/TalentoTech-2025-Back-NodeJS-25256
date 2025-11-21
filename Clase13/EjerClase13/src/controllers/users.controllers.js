import {
    getAllUsersService,
    getUserByIdService,
    getUsersAdminService
} from "../services/users.services.js"

export const getAllUsers = async (req, res) => {
    const users = await getAllUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await getUserByIdService(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }   
};

export const getUsersAdmin = async (req, res) => {
    const id = req.params.id;
    const result = await getUsersAdminService(id);
    res.status(200).json(result);
};

