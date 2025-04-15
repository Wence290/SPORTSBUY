import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIYCY1PD4mwoEqiUi40UHv3FBkdHReEeI",
    authDomain: "proyecto-d28b2.firebaseapp.com",
    projectId: "proyecto-d28b2",
    storageBucket: "proyecto-d28b2.firebasestorage.app",
    messagingSenderId: "571894518786",
    appId: "1:571894518786:web:d8645293475077a98a031b",
    measurementId: "G-QR35BW44NL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const getPedidos = async () => {
  const querySnapshot = await getDocs(collection(db, 'productos'));  //Obtiene todos los documentos de la colección productos de Firestore
  return querySnapshot;//Devuelve el resultado
};

export const getCompra = async (nombre, precio, talle, cantidad, total) => {
  const querySnapshot = await getDocs(collection(db, 'pedidos'), { nombre, precio, talle, cantidad, total });
  return querySnapshot;
};

export const deleteProducto = async (productoId) => {
  try {
    const productoRef = doc(db, 'productos', productoId);
    await deleteDoc(productoRef);
    console.log("Producto eliminado correctamente desde Firestore");
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
  }
};

export const eliminarProductos = async () => {
  try {
    // Obtener todos los documentos de la colección "productos"
    const querySnapshot = await getDocs(collection(db, 'productos'));

    // Iterar sobre los documentos y eliminar cada uno
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log('Colección "productos" eliminada correctamente');
  } catch (error) {
    console.error('Error al eliminar la colección "productos":', error);
  }
};

export const agregarProducto = async (producto) => {
  try {
    await addDoc(collection(db, 'productos'), producto);
    console.log('Producto almacenado correctamente en la colección "productos"');
  } catch (error) {
    console.error('Error al almacenar el producto:', error);
  }
};

export const agregarPedido = async (pedido) => {
  try {
    await addDoc(collection(db, 'pedidos'), pedido);
    console.log('Pedido almacenado correctamente en la colección "pedidos"');
  } catch (error) {
    console.error('Error al almacenar el pedido:', error);
  }
};

export { db, auth }