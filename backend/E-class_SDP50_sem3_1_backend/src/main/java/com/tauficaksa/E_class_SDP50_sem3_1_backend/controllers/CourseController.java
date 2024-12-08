package com.tauficaksa.E_class_SDP50_sem3_1_backend.controllers;


import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Course;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.service.Courseservice;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RestController
public class CourseController {
    Courseservice C_service;


    @PostMapping("/PostCourseData")
    public void PostCourseData(@RequestBody Course course)
    {
        C_service.PostCourseData(course);
    }

    @GetMapping("/GetAllCourseData")
    public List<Course> GetAllCourseData()
    {
        return C_service.GetAllCourseData();
    }

    @GetMapping("/GetCourseUser/{courseId}")
    public List<User> getCourseUser(@PathVariable int id)
    {
        return C_service.getCourseUser(id);

    }



}
