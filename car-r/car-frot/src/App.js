import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookCar from "./pages/BookCar";
import Payment from "./pages/Payment";
import Tracking from "./pages/Tracking";
import Bookings from "./pages/Bookings";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookCar />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;