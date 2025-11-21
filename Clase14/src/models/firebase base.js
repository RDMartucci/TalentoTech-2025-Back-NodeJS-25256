import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, setDoc, addDoc, updateDoc, deleteDoc  } from "firebase/firestore";

async function obtenerProducto() {
  const docRef = doc(db, "products", "rY2K419SLLO2tYfIQUuM");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Snap data: ", docSnap)
    console.log("Document ID:", docSnap.id);
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
//obtenerProducto()

async function obtenerProductos() {
  const querySnapshot = await getDocs(collection(db, "products"));
  console.log("Snap completa: ", querySnapshot)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}
obtenerProductos()

async function agregarProducto(producto) {
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(db, "products"), producto);
    console.log("Documento creado con ID: ", docRef.id);
    //console.log("Producto agregado: (docRef.data)", docRef.data); muestra UNDEFINED.
    console.log("Producto agregado: (producto)", producto);

  } catch (error) {
    console.error("Error adding document: ", error);
  }

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
async function actualizarProductoSinID(producto) {
  try {
    await updateDoc(doc(db, "products", producto.id), 
      {precio: producto.precio}
    );
    console.log("Documento actualizado con ID: ", producto.id);
  }
  catch (error) {
    console.error("Error al actualizar el documento: ", error);
  }
}

//actualizarProductoSinID({ id: "evqMGujafZlsdeNrKKV3", precio: "1557" })

async function eliminarProducto(id) {
  try {
    await deleteDoc(doc(db, "products", id));
    console.log("Documento eliminado con ID: ", id);
  }
  catch (error) {
    console.error("Error al eliminar el documento: ", error);
  }

}
//eliminarProducto("eEC4e5PcA1AjnZVsnXt4")
