import React, { useState } from "react";
import API from "../services/api";

function BookCar() {

  const [booking, setBooking] = useState({
    userId: "",
    carId: "",
    startDate: "",
    endDate: "",
    totalPrice: 0
  });

  const [pricePerDay, setPricePerDay] = useState(0);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  // AUTO PRICE CALCULATION
  const calculatePrice = () => {
    const start = new Date(booking.startDate);
    const end = new Date(booking.endDate);

    const days = (end - start) / (1000 * 60 * 60 * 24);

    if (days > 0) {
      const total = days * pricePerDay;
      setBooking({ ...booking, totalPrice: total });
    }
  };

  const bookCar = () => {
    API.post("/booking", booking)
      .then(() => alert("Booking Successful"));
  };

  return (
    <div>

      <h2>Book Car</h2>

      <input name="userId" placeholder="User ID" onChange={handleChange} />
      <input name="carId" placeholder="Car ID" onChange={handleChange} />

      <input type="date" name="startDate" onChange={handleChange} />
      <input type="date" name="endDate" onChange={handleChange} />

      <button onClick={calculatePrice}>
        Calculate Price
      </button>

      <h3>Total Price: ₹{booking.totalPrice}</h3>

      <button onClick={bookCar}>
        Confirm Booking
      </button>

    </div>
  );
}

export default BookCar;