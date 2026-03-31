import React, { useEffect, useState } from "react";
import API from "../services/api";

function BookingList() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get("/booking")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div>

      <h2>All Bookings</h2>

      {bookings.map(b => (
        <div key={b.id} style={{ border: "1px solid gray", margin: "10px" }}>
          <p>User ID: {b.userId}</p>
          <p>Car ID: {b.carId}</p>
          <p>{b.startDate} → {b.endDate}</p>
          <p>₹{b.totalPrice}</p>
        </div>
      ))}

    </div>
  );
}

export default BookingList;