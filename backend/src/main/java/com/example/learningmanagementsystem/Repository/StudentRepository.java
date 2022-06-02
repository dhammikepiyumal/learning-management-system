package com.example.learningmanagementsystem.Repository;

import com.example.learningmanagementsystem.Model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {


}
