import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./BookCar.css";

function BookCar() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userId: "",
    carId: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
    name: "",
    location: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    const {
      userId,
      carId,
      startDate,
      endDate,
      totalPrice,
      name,
      location,
      aadhaar,
    } = form;

    // ✅ VALIDATION
    if (
      !userId ||
      !carId ||
      !startDate ||
      !endDate ||
      !totalPrice ||
      !name ||
      !location ||
      !aadhaar
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    if (aadhaar.length !== 12) {
      alert("⚠️ Aadhaar must be 12 digits");
      return;
    }

    try {
      await API.post("/booking", form);
      alert("✅ Car Booked Successfully");

      // Save locally also
      const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
      bookings.push(form);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      navigate("/payment", { state: form });

    } catch (err) {
  console.error("ERROR:", err.response?.data || err.message);
  alert("Booking Failed ❌");
}
  };

  return (
    <div className="booking-container">

      <h2>🚗 Book Your Car</h2>

      <div className="form-box">

        <input name="userId" placeholder="User ID" onChange={handleChange} />
        <input name="carId" placeholder="Car ID" onChange={handleChange} />

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="location" placeholder="Pickup Location" onChange={handleChange} />

       <input type="date" name="startDate" onChange={handleChange} />
<input type="date" name="endDate" onChange={handleChange} />

        <input name="totalPrice" placeholder="Total Price" onChange={handleChange} />

        <input
          name="aadhaar"
          placeholder="Aadhaar Number"
          maxLength="12"
          onChange={handleChange}
        />

        <button onClick={handleBooking}>Proceed to Payment</button>

      </div>
    </div>
  );
}

export default BookCar;