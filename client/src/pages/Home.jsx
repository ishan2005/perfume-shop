import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchProducts()
    .then((res) => setProducts(res.data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, []);

{loading ? (
  <p style={{ textAlign: "center" }}>Loading perfumes...</p>
) : (
  <div id="products" style={styles.grid}>
    {products.map((p) => (
      <ProductCard key={p._id} product={p} />
    ))}
  </div>
)}

  return (
   <>
  <Navbar />
  <Banner />

  <section style={styles.section}>
    <h2 style={styles.heading}>Featured Perfumes</h2>

    <div id="products" style={styles.grid}>
      {products.length > 0 &&
        products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
    </div>
  </section>
</>

  );
}

const styles = {
  section: {
    padding: "60px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "30px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "30px",
  },
};

