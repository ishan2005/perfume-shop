import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

 return (
  <div
    style={styles.card}
    onClick={() => navigate(`/product/${product._id}`)}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
    }}
  >
    <img
      src={product.images[0]}
      alt={product.name}
      style={styles.image}
    />

    <div style={styles.info}>
      <h3>{product.name}</h3>
      <p>{product.shortDesc}</p>
      <span>₹{product.price}</span>
    </div>
  </div>
);

}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  info: {
    padding: "16px",
  },
};

