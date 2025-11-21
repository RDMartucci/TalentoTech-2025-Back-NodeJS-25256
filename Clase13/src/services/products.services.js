import {
  obtenerProductos
} from "../models/products.models.js"

export const getAllProductsService = async () => {
  console.log("services->getAllProductsService");
  const products = await obtenerProductos()
  return products;
};

export const getProductByIdService = async (id) => {
    const products = await obtenerProductos()
    console.log("servicios-obtenerProductosbyID",products)
    return products.find(product => product.id == id);
};