// import {
//     getAllProductsService,
//     getProductByIdService
// } from "../services/products.services.js"
// otra maner de importar todo de services:
import * as productServices from "../services/products.services.js";

export const getAllProducts = async (request, resolve) => {
    try {
        console.log("paso1")
        const products = await productServices.getAllProductsService()
        console.log("controllers-obtenerProductos", products);
        resolve.status(200).json(products);
    } catch (error) {
        resolve.status(500).send()
    }

};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const product = await productServices.getProductByIdService(id);
            if (product) {
                console.log("controllers-obtenerProductoByID", product);
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } else {
            res.status(400).json({ message: 'ID de producto no proporcionado' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const addProduct = async (req, res) => {
    try {
        const newProductData = req.body;
        const newProduct = await productServices.addProductService(newProductData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto', error });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) res.status(400).json({ message: 'ID de producto no proporcionado' });
        const deleted = await productServices.deleteProductService(id);
        if (deleted) {
            res.status(200).send()//json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) res.status(400).json({ message: 'ID de producto no proporcionado' });
        const updateData = req.body;
        const updatedProduct = await productServices.updateProductService(id, updateData);
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
};

