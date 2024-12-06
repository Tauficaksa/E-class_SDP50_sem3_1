package com.tauficaksa.E_class_SDP50_sem3_1_backend.controllers;


import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.service.TestDB_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RestController
public class TestDb_controller {

    @Autowired
    TestDB_Service service;

    @PostMapping("/postestDb")
    public void PostTestData(@RequestBody TestingDB testDB)
    {
        service.PostTestData(testDB);
    }

    @GetMapping("/gettestDb")
    public List<TestingDB> GetTestData()
    {
        return service.GetTestData();
    }

    @PostMapping("/login")
    public String login(@RequestBody TestingDB loginRequest) {
        return service.login(loginRequest.getName(), loginRequest.getPwd());
    }

}
