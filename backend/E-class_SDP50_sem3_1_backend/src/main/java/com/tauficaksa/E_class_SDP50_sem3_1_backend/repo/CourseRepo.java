package com.tauficaksa.E_class_SDP50_sem3_1_backend.repo;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Course;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository<Course,Integer> {

}
