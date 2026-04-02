import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === login.email &&
      savedUser.password === login.password
    ) {
      alert("Login Successful!");
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}