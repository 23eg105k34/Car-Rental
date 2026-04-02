package com.example.backend.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // ✅ HANDLE ALL ERRORS
    @ExceptionHandler(Exception.class)
    public String handleAllExceptions(Exception ex) {
        return "Error: " + ex.getMessage();
    }
}