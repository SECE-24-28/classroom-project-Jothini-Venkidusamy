import { Link } from "react-router-dom";

const Home = () => {
  const styles = {
    page: {
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e6f0fa",
      overflow: "hidden",
    },
    card: {
      background: "white",
      padding: "40px 50px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      width: "600px",
      maxWidth: "90%",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#123a63",
      marginBottom: "15px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#444",
      marginBottom: "25px",
    },
    button: {
      background: "#123a63",
      color: "white",
      padding: "12px 30px",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer",
      display: "inline-block",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome to Order Tracking System</h1>
        <p style={styles.subtitle}>Track your orders easily and quickly.</p>
        <Link to="/login" style={styles.button}>Go to Login</Link>
      </div>
    </div>
  );
};

export default Home;
