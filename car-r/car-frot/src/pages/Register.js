import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // Save user locally (temporary)
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}