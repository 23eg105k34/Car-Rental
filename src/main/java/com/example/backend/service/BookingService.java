package com.example.backend.service;

import com.example.backend.model.Booking;
import com.example.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    // ✅ SAVE BOOKING
    public Booking saveBooking(Booking booking) {

        // Aadhaar validation
        if (booking.getAadhaar() == null || booking.getAadhaar().length() != 12) {
            throw new RuntimeException("Aadhaar must be 12 digits");
        }

        return repo.save(booking);
    }

    // GET ALL
    public List<Booking> getBookings() {
        return repo.findAll();
    }

    // GET BY ID
    public Booking getBookingById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // DELETE
    public void deleteBooking(Long id) {
        repo.deleteById(id);
    }

    // UPDATE
    public Booking updateBooking(Long id, Booking updatedBooking) {
        Booking booking = repo.findById(id).orElse(null);

        if (booking != null) {
            booking.setStartDate(updatedBooking.getStartDate());
            booking.setEndDate(updatedBooking.getEndDate());
            booking.setTotalPrice(updatedBooking.getTotalPrice());
            booking.setStatus(updatedBooking.getStatus());
            return repo.save(booking);
        }

        return null;
    }
}