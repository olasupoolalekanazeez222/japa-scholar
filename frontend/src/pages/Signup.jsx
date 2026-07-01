import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/auth.css";

export default function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    destination: "",
    pathway: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!form.agree) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      alert("Account created successfully!");

      navigate("/login");

    }, 2000);

  };

  return (

    <div className="auth-page">

      <form className="auth-card" onSubmit={handleSubmit}>

        <div className="auth-logo">
          J
        </div>

        <h2 className="auth-title">
          Join Japa Community
        </h2>

        <p className="auth-subtitle">
          Connect with verified relocation experiences.
        </p>

        <div className="auth-group">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="John Watson"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="john@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Current Country</label>

          <input
            type="text"
            name="country"
            placeholder="Nigeria"
            value={form.country}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Destination Country</label>

          <input
            type="text"
            name="destination"
            placeholder="Canada"
            value={form.destination}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Preferred Pathway</label>

          <input
            type="text"
            name="pathway"
            placeholder="Study Visa"
            value={form.pathway}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="auth-group">
          <label>Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="auth-options">

          <label>

            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />

            {" "}I agree to the Terms

          </label>

        </div>

        <button
          className="auth-btn"
          disabled={loading}
        >

          {loading ? "Creating Account..." : "Create Account"}

        </button>

        <div className="auth-footer">

          Already have an account?

          {" "}

          <Link to="/login">

            <span>

              Login

            </span>

          </Link>

        </div>

      </form>

    </div>

  );

}