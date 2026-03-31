import React, { useState } from "react";
import API from "../services/api";

function Login(){

const[user,setUser]=useState({
email:"",
password:""
});

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
};

const login=()=>{

API.post("/auth/login",user)
.then(res=>{
localStorage.setItem("token",res.data);
localStorage.setItem("isLoggedIn", true);
alert("Login Success");
})
.catch(()=>alert("Login Failed"));

};

return(

<div>

<h2>Login</h2>

<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="password" placeholder="Password" onChange={handleChange}/>

<button onClick={login}>Login</button>

</div>

);

}

export default Login;