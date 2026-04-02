import React, { useState } from "react";
import API from "../services/api";

function Bookings() {

  // ✅ DEFINE FORM STATE (THIS WAS MISSING ❗)
  const [form, setForm] = useState({
    userId: "",
    carId: "",
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
    aadhaar: ""
  });

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ BOOKING FUNCTION
  const handleBooking = async () => {
    try {

      const fixedData = {
        userId: Number(form.userId),
        carId: Number(form.carId),
        name: form.name,
        location: form.location,
        startDate: form.startDate,
        endDate: form.endDate,
        totalPrice: Number(form.totalPrice || 0),
        aadhaar: form.aadhaar
      };

      console.log("Sending:", fixedData);

      await API.post("/bookings", fixedData);

      alert("Booking Success ✅");

    } 
    catch (err) {
  console.log("FULL ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("DATA:", err.response?.data);
  alert("Booking Failed ❌");
}
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Book Car</h2>

      <input name="userId" placeholder="User ID" onChange={handleChange} /><br/>
      <input name="carId" placeholder="Car ID" onChange={handleChange} /><br/>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="location" placeholder="Location" onChange={handleChange} /><br/>

      {/* ✅ IMPORTANT DATE FORMAT */}
      <input type="date" name="startDate" onChange={handleChange} /><br/>
      <input type="date" name="endDate" onChange={handleChange} /><br/>

      <input name="totalPrice" placeholder="Price" onChange={handleChange} /><br/>
      <input name="aadhaar" placeholder="Aadhaar (12 digits)" onChange={handleChange} /><br/>

      <button onClick={handleBooking}>Book Car</button>
    </div>
  );
}

export default Bookings;