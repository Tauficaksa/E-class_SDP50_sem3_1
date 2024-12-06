package com.tauficaksa.E_class_SDP50_sem3_1_backend.repo;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    Admin findByEmailIdAndPwd(String emailId, String pwd);
}
