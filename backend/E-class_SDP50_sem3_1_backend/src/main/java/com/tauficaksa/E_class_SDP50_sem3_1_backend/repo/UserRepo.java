package com.tauficaksa.E_class_SDP50_sem3_1_backend.repo;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
    User findByEmailIdAndPwd(String emailId, String pwd);

    User findById(Long id);
}
