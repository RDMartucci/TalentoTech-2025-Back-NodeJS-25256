import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

function obtenerProducto(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Snap data: ", docSnap)
        console.log("Document ID:", docSnap.id);
        console.log("Document data:", docSnap.data());
        resolve(docSnap.data());

      } else {
        // docSnap.data() will be undefined in this case
        console.log("¡No existe el documento!");
      }
    } catch (error) {
      console.error("Error al obtener el documento: ", error);
      reject(error);
    }
  });
}

//obtenerProducto(id)

function obtenerProductos() {
  return new Promise(async (resolve, reject) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      console.log("Snap completa: ", querySnapshot)
      const productos = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        productos.push({ id: doc.id, ...doc.data() });
      });
      console.log("Productos obtenidos: ", productos);
      resolve(productos);
    }
    catch (error) {
      console.error("Error al obtener los documentos: ", error);
      reject(error);
    }
  });
}
obtenerProductos()

async function agregarProducto(producto) {
  return new Promise(async (resolve, reject) => {
    // Add a new document with a generated id.
    try {
      const docRef = await addDoc(collection(db, "products"), producto);
      console.log("Documento creado con ID: ", docRef.id);
      //console.log("Producto agregado: (docRef.data)", docRef.data); muestra UNDEFINED.
      console.log("Producto agregado: (producto)", producto);
      resolve({ ...producto, id: docRef.id });

    } catch (error) {
      console.error("Error adding document: ", error);
      reject(error);
    }
  });
}
//agregarProducto( {nombre:"agua", categoria:"bebida",precio:"1200"})


async function actualizarProducto(producto) {
  try {
    await updateDoc(doc(db, "products", producto.id), producto);
    console.log("Documento actualizado con ID: ", producto.id);
  }
  catch (error) {
    console.error("Error al actualizar el documento: ", error);
  }
}

//actualizarProducto({ id: "evqMGujafZlsdeNrKKV3", precio: "1500" })// se actualiza el precio del producto con id especificado y tambien se agrega el ID com un campo mas del producto.

//otra manera de hacer lo mismo:
function actualizarProductoSinID(producto) {
  return new Promise(async (resolve, reject) => {
    try {
      await updateDoc(doc(db, "products", producto.id),
        { precio: producto.precio }
      );
      console.log("Documento actualizado con ID: ", producto.id);
      resolve();
    }
    catch (error) {
      console.error("Error al actualizar el documento: ", error);
      reject(error);
    }
  }
  );
}

//actualizarProductoSinID({ id: "evqMGujafZlsdeNrKKV3", precio: "1557" })

function eliminarProducto(id) {
  return new Promise(async (resolve, reject) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Documento eliminado con ID: ", id);
      resolve();
    }
    catch (error) {
      console.error("Error al eliminar el documento: ", error);
      reject(error);
    }
  });
}
//eliminarProducto("eEC4e5PcA1AjnZVsnXt4")
