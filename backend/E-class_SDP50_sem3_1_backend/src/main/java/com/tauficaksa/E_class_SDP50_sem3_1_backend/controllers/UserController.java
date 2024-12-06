package com.tauficaksa.E_class_SDP50_sem3_1_backend.controllers;


//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RestController
public class UserController {

    @Autowired
    UserService U_Service;

    @PostMapping("/PostUserData")
    public void PostUserData(@RequestBody User user)
    {
        U_Service.PostUserData(user);
    }

    @GetMapping("/GetAllUserData")
    public List<User> GetAllUserData()
    {
        return U_Service.GetAllUserData();
    }

    @PostMapping("/userlogin")
    public String userlogin(@RequestBody User loginRequest) {
        return U_Service.userlogin(loginRequest.getEmailId(), loginRequest.getPwd());
    }

}
