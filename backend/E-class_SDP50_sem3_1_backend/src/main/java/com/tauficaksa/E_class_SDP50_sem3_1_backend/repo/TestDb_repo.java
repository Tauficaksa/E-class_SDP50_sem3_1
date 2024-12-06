package com.tauficaksa.E_class_SDP50_sem3_1_backend.repo;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDb_repo extends JpaRepository<TestingDB ,Integer> {
    TestingDB findByNameAndPwd(String name, String pwd);

}
