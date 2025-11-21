
//****************************************************************************************
//Aca se configura la conexion a la base de datos Firebase Firestore.
//Se usan variables de entorno para no exponer datos sensibles en el codigo fuente.
//Las variables de entorno se definen en el archivo .env en la raiz del proyecto.
//Para que funcione, se debe instalar la dependencia dotenv: npm install dotenv
//y se debe importar al inicio de este archivo.
//Luego, se accede a las variables de entorno mediante process.env.NOMBRE_VARIABLE
//donde NOMBRE_VARIABLE es el nombre de la variable definida en el archivo .env.
//****************************************************************************************

import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "prubacknode25",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "102245755627",
    appId: process.env.FIREBASE_APP_ID
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Firestore
const db = getFirestore(app);

export { db };