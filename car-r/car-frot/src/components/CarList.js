import React,{useState,useEffect} from "react"
import API from "../services/api"

function CarList(){

const[cars,setCars]=useState([])

useEffect(()=>{

API.get("/cars")
.then(res=>{
setCars(res.data)
})

},[])

return(

<div>

<h2>Available Cars</h2>

{cars.map(car=>(

<div key={car.id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

<h3>{car.carName}</h3>

<p>Brand: {car.brand}</p>

<p>Price Per Day: ₹{car.pricePerDay}</p>

<p>Available: {car.available ? "Yes":"No"}</p>

</div>

))}

</div>

)

}

export default CarList