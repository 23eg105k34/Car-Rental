import CarCard from "../components/CarCard";
import "./Cars.css";

const cars = [
  {
    name: "Swift",
    price: 1200,
    fuel: "Petrol",
    seats: 5,
    rating: 4.3,
    transmission: "Manual",
    mileage: "22 km/l",
    location: "Hyderabad",
    image: "https://i.pinimg.com/originals/95/d7/52/95d752a45cfaede9981ac10f02342db9.jpg",
  },
  {
    name: "Hyundai Creta",
    price: 2000,
    fuel: "Diesel",
    seats: 5,
    rating: 4.6,
    transmission: "Automatic",
    mileage: "18 km/l",
    location: "Hyderabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpLCBg9dhwkmFgxbdAcsad4KPPuicyt1yGQ&s",
  },

  {
    name: "Audi A4",
    price: 5500,
    fuel: "Petrol",
    seats: 5,
    rating: 4.7,
    transmission: "Automatic",
    mileage: "14 km/l",
    location: "Hyderabad",
    image: "https://www.motorbeam.com/wp-content/uploads/2024-Audi-A4-1.jpg",
  },
  {
    name: "Mahindra Thar",
    price: 3000,
    fuel: "Diesel",
    seats: 4,
    rating: 4.5,
    transmission: "Manual",
    mileage: "16 km/l",
    location: "Hyderabad",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Mahindra_Thar_SUV_in_%22Red_Rage%22_color_at_Ashiana_Brahmanda%2C_East_Singbhum_India_%28Ank_Kumar%2C_Infosys_limited%29_02_%28cropped%29.jpg",
  },
  {
    name: "Toyota Fortuner",
    price: 4000,
    fuel: "Diesel",
    seats: 7,
    rating: 4.9,
    transmission: "Automatic",
    mileage: "12 km/l",
    location: "Hyderabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Jc8nSag5HPBBqVrbk2y57exOBls-fhjjfQ&s",
  },
  {
    name: "Kia Seltos",
    price: 2200,
    fuel: "Petrol",
    seats: 5,
    rating: 4.6,
    transmission: "Automatic",
    mileage: "18 km/l",
    location: "Hyderabad",
    image: "https://images.overdrive.in/wp-content/uploads/2023/07/2023-Kia-Seltos-Broll-27-900x506.jpg",
  }
];

export default function Cars() {
  return (
    <div>
      <h2 className="title">Available Cars</h2>

      <div className="car-container">
        {cars.map((car, i) => (
          <CarCard key={i} car={car} />
        ))}
      </div>
    </div>
  );
}