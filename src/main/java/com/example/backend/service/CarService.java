package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.Car;
import com.example.backend.repository.CarRepository;

import java.util.List;

@Service
public class CarService {

    @Autowired
    private CarRepository repo;

    public Car addCar(Car car) {
        return repo.save(car);
    }

    public List<Car> getCars() {
        return repo.findAll();
    }

    public Car getCarById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteCar(Long id) {
        repo.deleteById(id);
    }
}