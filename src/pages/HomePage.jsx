import React from "react";
import "./HomePage.css"; // reuse your login CSS

const HomePage = () => {
  return (
    <div className="center">
      <h1>Welcome to LinkChat</h1>

      <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Login Button */}
        <button
          style={{
            height: "50px",
            border: "2px solid #6DBC00",
            background: "#FFFFFF",
            borderRadius: "5px",
            fontSize: "18px",
            color: "#000000",
            fontWeight: 700,
            cursor: "pointer"
          }}
          onClick={() => window.location.href = "/login"} // redirect to login page
        >
          Login to Chat Room
        </button>

        {/* Admin Sign Up Button */}
        <button
          style={{
            height: "50px",
            border: "2px solid #4631A0",
            background: "#FFFFFF",
            borderRadius: "5px",
            fontSize: "18px",
            color: "#000000",
            fontWeight: 700,
            cursor: "pointer"
          }}
          onClick={() => window.location.href = "http://localhost:8080/ui/admin-register"} // redirect to admin signup page
        >
          Create Admin Account
        </button>
      </div>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#a6a6a6", fontSize: "14px" }}>
        Simple and secure chat service for everyone.
      </p>
    </div>
  );
};

export default HomePage;