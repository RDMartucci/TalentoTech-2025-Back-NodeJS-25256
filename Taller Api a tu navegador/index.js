import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// 🧠 Middleware para permitir CORS
app.use(cors());

// Middleware para leer JSON
app.use(express.json());

let items = [
  { id: 1, nombre: "Manzana" },
  { id: 2, nombre: "Banana" }
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  console.log("Back->POST/body:",req.body)
  const nuevoItem = req.body;
  nuevoItem.id = items.length + 1;
  items.push(nuevoItem);
  res.status(201).json(nuevoItem);
  console.log("Back->POST/items:",items)
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
