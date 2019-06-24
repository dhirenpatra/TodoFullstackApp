package com.springbootBydhiren.fullstackspringboot.controller;

import com.springbootBydhiren.fullstackspringboot.model.StudentModel;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @GetMapping
    public List<StudentModel> getAllStudents() {
        return Arrays.asList(
                new StudentModel(UUID.randomUUID().toString(), "Dhiren", 25),
                new StudentModel(UUID.randomUUID().toString(), "Disha", 28),
                new StudentModel(UUID.randomUUID().toString(), "Pooja", 25)
        );
    }

    @GetMapping("/{id}")
    public StudentModel getParticularStudents(@PathVariable String id) {
        return new StudentModel(UUID.randomUUID().toString(), "Dhiren", 25);
    }

    @GetMapping("/{id}/error")
    public StudentModel getParticularStudentsWithError(@PathVariable String id) {
        throw new RuntimeException("Error Occurred !!");
    }

    @PostMapping
    public StudentModel createStudent(@RequestBody StudentModel model) {
        return model;
    }

}