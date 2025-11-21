import { getAllProducts } from "../models/products.models.js";

export const getAllProductsService = async () => {
    const products = await getAllProducts();
    return products;
};

export const getProductByIdService = async (id) => {
    const products = await getAllProducts();
    return products.find(product => product.id == id);
};


