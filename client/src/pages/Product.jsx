import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchProductById } from "../services/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const shareProduct = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Product link copied to clipboard!");
};


  useEffect(() => {
    fetchProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
  return (
    <>
      <Navbar />
      <p style={{ textAlign: "center", marginTop: "80px" }}>
        Loading product details...
      </p>
    </>
  );
}

  return (
  <>
    <Navbar />

    <section style={styles.page}>
      <div style={styles.container}>
        {/* LEFT: IMAGE */}
        <div style={styles.imageBox}>
          <img
            src={product.images[0]}
            alt={product.name}
            style={styles.image}
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div style={styles.details}>
          <h1>{product.name}</h1>
          <p style={styles.desc}>{product.fullDesc}</p>

          <h2 style={styles.price}>₹{product.price}</h2>

          {/* SIZE PILLS */}
         <div style={styles.sizes}>
  {product.sizes.map((size) => (
    <span
      key={size}
      style={styles.sizePill}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#000";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#000";
      }}
    >
      {size}
    </span>
  ))}
</div>


          <div style={styles.actions}>
           <button
  style={styles.buyBtn}
  title="Checkout coming soon"
>
  Buy Now
</button>

          </div>
        </div>
      </div>
    </section>
  </>
);

}

const styles = {
  page: {
    padding: "60px 20px",
  },
  container: {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "40px",
},

  imageBox: {
    background: "#f7f7f7",
    borderRadius: "16px",
    padding: "30px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  desc: {
    color: "#444",
    lineHeight: "1.6",
  },
  price: {
    fontSize: "28px",
    fontWeight: "600",
    marginTop: "10px",
  },
  sizes: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },
  sizePill: {
  padding: "8px 16px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  cursor: "pointer",
  fontSize: "14px",
  transition: "all 0.2s ease",
},

  actions: {
    display: "flex",
    gap: "16px",
    marginTop: "30px",
  },
 buyBtn: {
  padding: "14px 28px",
  background: "#000",
  color: "#fff",
  border: "none",
  cursor: "not-allowed",
  opacity: 0.7,
  fontSize: "16px",
},

  shareBtn: {
    padding: "14px 24px",
    background: "#fff",
    border: "1px solid #000",
    cursor: "pointer",
    fontSize: "16px",
  },
};

