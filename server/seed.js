import mongoose from "mongoose";
import Product from "./models/Product.js";

await mongoose.connect("mongodb://127.0.0.1:27017/perfumeDB");


await Product.deleteMany();

await Product.insertMany([
  {
    name: "Aroma Noir",
    shortDesc: "Bold and masculine fragrance",
    fullDesc:
      "A premium fragrance with woody and spicy notes designed for confident individuals.",
    price: 2999,
    sizes: ["50ml", "100ml"],
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
    ],
    reviews: [],
  },
  {
    name: "Rose Mist",
    shortDesc: "Elegant floral essence",
    fullDesc:
      "Soft rose notes blended with freshness, perfect for everyday elegance.",
    price: 2499,
    sizes: ["50ml", "100ml"],
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    ],
    reviews: [],
  },
  {
    name: "Ocean Drift",
    shortDesc: "Fresh aquatic perfume",
    fullDesc:
      "A refreshing aquatic fragrance inspired by ocean breeze.",
    price: 2799,
    sizes: ["50ml", "100ml"],
    images: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
    ],
    reviews: [],
  },
]);

console.log("Products Seeded");
process.exit();
