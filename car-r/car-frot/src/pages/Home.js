import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Find Your Perfect Ride 🚗</h1>
      <p>Book cars anywhere, anytime</p>

      <div className="search-box">
        <input placeholder="Enter location" />
        <input type="date" />
        <input type="date" />
        <button onClick={() => navigate("/cars")}>Search</button>
      </div>
    </div>
  );
}