import express from "express";
import cors from "cors";
import { products } from "./data/products.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET /api/products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST /api/checkout
app.post("/api/checkout", (req, res) => {
  const { items } = req.body;
  console.log("🛒 Order received:", items);
  res.json({ message: "Checkout successful!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
