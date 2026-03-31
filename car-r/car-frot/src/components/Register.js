import React,{useState} from "react"
import API from "../services/api"

function Register(){

const[user,setUser]=useState({
name:"",
email:"",
password:"",
aadhaarNumber:""
})

const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const registerUser=()=>{
localStorage.setItem("user", JSON.stringify(user));
API.post("/users/register",user)
.then(()=>{
alert("User Registered Successfully")
})

}

return(

<div>

<h2>User Registration</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>
<br/>

<input name="email" placeholder="Email" onChange={handleChange}/>
<br/>

<input name="password" placeholder="Password" onChange={handleChange}/>
<br/>

<input name="aadhaarNumber" placeholder="Aadhaar Number" onChange={handleChange}/>
<br/>

<button onClick={registerUser}>Register</button>

</div>

)

}

export default Register