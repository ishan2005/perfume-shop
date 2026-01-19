export default function Navbar() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>AromaLuxe</h2>

      <div style={styles.links}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </button>
        <button onClick={() => scrollTo("products")}>Perfumes</button>
        <button onClick={() => scrollTo("banner")}>Offers</button>
        <button onClick={() => scrollTo("footer")}>Contact</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  logo: {
    fontWeight: "600",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};
