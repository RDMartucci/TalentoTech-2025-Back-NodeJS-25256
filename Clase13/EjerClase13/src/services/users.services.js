import { getAllUsers } from "../models/users.models.js";

export const getAllUsersService = async () => {
    const users = await getAllUsers();
    return users;
};

export const getUserByIdService = async (id) => {
    const users = await getAllUsers();
    return users.find(user => user.id == id);
};

export const getUsersAdminService = async (id) => {
    const users = await getAllUsers();
    const user = users.find(user => user.id == id);
    if (user && user.isAdmin) {
        return { message: 'El usuario es administrador' };
    } else {
        return { message: 'El usuario no es administrador' };
    }   
};
