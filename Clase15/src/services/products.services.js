import {
  obtenerProductos, 
  obtenerProducto, 
  agregarProducto, 
  actualizarProductoSinID, 
  eliminarProducto} from "../models/products.models.js";


export const getAllProductsService = async () => {
  return new Promise(async (resolve, reject) => {
    console.log("services->getAllProductsService-Promise");
    try {
      const products = await obtenerProductos()
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};

export const getProductByIdService = async (id) => {
  return new Promise(async (resolve, reject) => {
    console.log("services->getProductByIdService-Promise");
    try {
      const products = await obtenerProductos()
      console.log("servicios-obtenerProductosbyID",products)
      resolve(products.find(product => product.id == id));
    } catch (error) {
      reject(error);
    }
  });
};

export const addProductService = async (newProductData) => {
  return new Promise(async (resolve, reject) => {
    console.log("services->addProductService-Promise");
    try {
      const newProduct = await agregarProducto(newProductData);
      resolve(newProduct);
    } catch (error) {
      reject(error);
    } 
  });
};
export const deleteProductService = async (id) => {
  return new Promise(async (resolve, reject) => {
    console.log("services->deleteProductService-Promise");  
    try {
      const deleted = await eliminarProducto(id);
      resolve(deleted);
      console.log("services->deleteProductService-Promise-deleted:", deleted);
    } catch (error) {
      reject(error);
    } 
  });
};  

export const updateProductService = async (id, updatedProductData) => {
  return new Promise(async (resolve, reject) => {
    console.log("services->updateProductService-Promise");  
    try {
      const updatedProduct = await actualizarProductoSinID(id, updatedProductData);
      resolve(updatedProduct);
    }
    catch (error) {
      reject(error);
    } 
  });
};

      
