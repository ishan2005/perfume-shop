export default function Banner() {
  const goToProducts = () => {
    const section = document.getElementById("products");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="banner" style={styles.banner}>
      <h1 style={{ fontWeight: "700", fontSize: "42px" }}>
        Luxury Fragrances
      </h1>
      <p>Smell Premium. Feel Confident.</p>
      <button style={styles.btn} onClick={goToProducts}>
        Shop Now
      </button>
    </div>
  );
}

const styles = {
  banner: {
    padding: "90px 20px",
    textAlign: "center",

    /* ✅ ADD THIS LINE */
    background: "linear-gradient(to right, #fafafa, #f2f2f2)",
  },
  btn: {
    marginTop: "20px",
    padding: "12px 28px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    background: "#000",
    color: "#fff",
  },
};
