import "./CarCard.css";
import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("Please login first!");
      navigate("/login");
    } else {
      navigate("/book", { state: car });
    }
  };

  return (
    <div className="card">
      <img
  src={car.image}
  alt={car.name}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/300x180?text=Car+Image";
  }}
/>

      <div className="card-content">
        <h3>{car.name}</h3>
        <p className="price">₹{car.price}/day</p>

        <p>📍 {car.location}</p>
        <p>⛽ {car.fuel}</p>
        <p>⚙️ {car.transmission}</p>
        <p>👥 {car.seats} Seats</p>
        <p>🚘 {car.mileage}</p>
        <p>⭐ {car.rating}</p>

        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
}