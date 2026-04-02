import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>🚗 CarRental</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
            <Link to="/bookings">My Bookings</Link>
          </>
        ) : (
          <>
            <span className="welcome">Hi, {user?.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}