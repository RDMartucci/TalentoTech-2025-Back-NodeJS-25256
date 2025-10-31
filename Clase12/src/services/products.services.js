const products = [
  { id: 1, name: 'Producto 1', price: 1000 },
  { id: 2, name: 'Producto 2', price: 2000 },
  { id: 3, name: 'Producto 3', price: 3000 },
  { id: 4, name: 'Producto 4', price: 4000 },
  { id: 5, name: 'Producto 5', price: 5000 }

];

export const getAllProductsService = () => {
  return products;
};

export const getProductByIdService = async (id) => {
    return products.find(product => product.id == id);
};