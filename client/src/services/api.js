import axios from "axios";

const API = axios.create({
  baseURL: "https://perfume-shop-m1hb.onrender.com/api"
});

export const fetchProducts = () => API.get("/products");
export const fetchProductById = (id) => API.get(`/products/${id}`);
