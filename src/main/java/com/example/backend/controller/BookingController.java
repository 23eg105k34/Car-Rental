package com.example.backend.controller;

import com.example.backend.model.Booking;
import com.example.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService service;

    // CREATE
    @PostMapping
    public Booking bookCar(@RequestBody Booking booking) {
        return service.saveBooking(booking);
    }

    // GET ALL
    @GetMapping
    public List<Booking> getBookings() {
        return service.getBookings();
    }

    // GET ONE
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return service.getBookingById(id);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteBooking(@PathVariable Long id) {
        service.deleteBooking(id);
        return "Deleted Successfully";
    }

    // UPDATE
    @PutMapping("/{id}")
    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        return service.updateBooking(id, booking);
    }
}