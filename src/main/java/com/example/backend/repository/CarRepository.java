package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.Car;

public interface CarRepository extends JpaRepository<Car, Long> {
}