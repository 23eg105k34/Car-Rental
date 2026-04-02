package com.example.backend.controller;

import com.example.backend.model.Car;
import com.example.backend.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {

    @Autowired
    private CarService service;

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return service.addCar(car);
    }

    @GetMapping
    public List<Car> getCars() {
        return service.getCars();
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable Long id) {
        return service.getCarById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCar(@PathVariable Long id) {
        service.deleteCar(id);
        return "Car deleted";
    }
}