import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    fullDesc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sizes: [
      {
        type: String, // e.g. "50ml", "100ml"
      },
    ],
    images: [
      {
        type: String, // image URLs
      },
    ],
    reviews: [
      {
        user: String,
        comment: String,
        rating: Number,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
