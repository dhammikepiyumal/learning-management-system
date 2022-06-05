package com.example.learningmanagementsystem.Controller;

import com.example.learningmanagementsystem.Model.Student;
import com.example.learningmanagementsystem.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/insert")
    public void createStudent(@RequestBody Student student) {
        studentRepository.insert(student);
    }

    @GetMapping("/list")
    public List<Student> listStudents() {
        return studentRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id) {
        studentRepository.deleteById(id);
    }
}
