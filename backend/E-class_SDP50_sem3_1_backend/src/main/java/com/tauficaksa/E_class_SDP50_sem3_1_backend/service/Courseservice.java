package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Course;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.CourseRepo;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Courseservice {

    @Autowired
    CourseRepo C_repo;

    public void PostCourseData(Course course)
    {
        C_repo.save(course);
    }

    public List<Course> GetAllCourseData()
    {
        return C_repo.findAll();
    }


    UserRepo U_Repo;
    public List<User> getCourseUser(int id) {
        Course course = C_repo.findById(id).orElse(null);
        User user= course.getUser();
        return U_Repo.findAllById(user.getId());
    }
}
