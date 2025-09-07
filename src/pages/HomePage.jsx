import React from "react";
import "./HomePage.css"; // reuse your login CSS

const HomePage = () => {
  return (
    <div className="center">
      <h1>Welcome to LinkChat</h1>

      <div className="button-container">
        {/* Login Button */}
        <button id="login-button"
               onClick={() => window.location.href = "/login"} // redirect to login page
        >
            Login to Chat Room
        </button>

        {/* Admin Sign Up Button */}
        <button id="admin-signup-button"
               onClick={() => window.location.href = "http://localhost:8080/ui/admin-register"} // redirect to admin signup page
        >
            Create Admin Account
        </button>
      </div>

      <p class="footer-text">
        Simple and secure chat service for everyone.
      </p>
    </div>
  );
};

export default HomePage;