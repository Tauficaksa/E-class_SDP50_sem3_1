package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;

import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.TestDb_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service

public class TestDB_Service {

    @Autowired
    TestDb_repo repo;


    public void PostTestData( TestingDB testDB)
    {
        repo.save(testDB);
    }

    public List<TestingDB> GetTestData()
    {
        return repo.findAll();
    }

    public String login(String name, String pwd) {
        TestingDB testingDB = repo.findByNameAndPwd(name, pwd);
        if (testingDB == null) {
            return "failure";
        } else {
            return "Login Successful!";
        }
    }
}
