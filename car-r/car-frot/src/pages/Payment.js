import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ SAVE BOOKING
  const saveBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      ...state,
      bookedAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    localStorage.setItem("bookings", JSON.stringify(bookings));
  };

  // 💳 RAZORPAY PAYMENT
  const handlePayment = () => {
    const options = {
      key: "rzp_test_YourKeyHere", // 🔥 PUT YOUR KEY HERE
      amount: state.totalPrice * 100 || state.price * 100, // paise
      currency: "INR",
      name: "Car Rental",
      description: state.name || "Car Booking",

      handler: function (response) {
        saveBooking();
        alert("✅ Payment Successful!");
        navigate("/tracking");
      },

      theme: {
        color: "#2563eb",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!state) return <h2>No booking data</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Payment Page</h2>

      <h3>{state.name}</h3>
      <p>Total: ₹{state.totalPrice || state.price}</p>

      <button
        onClick={handlePayment}
        style={{
          padding: "12px 25px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Pay Securely 💳
      </button>
    </div>
  );
}