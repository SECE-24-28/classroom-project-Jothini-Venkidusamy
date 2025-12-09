import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      padding: "35px",
      borderRadius: "15px",
      width: "380px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#123a63",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #aaa",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#123a63",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
