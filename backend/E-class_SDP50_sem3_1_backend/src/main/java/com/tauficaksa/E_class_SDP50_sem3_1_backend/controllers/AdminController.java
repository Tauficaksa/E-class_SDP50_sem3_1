package com.tauficaksa.E_class_SDP50_sem3_1_backend.controllers;


//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Admin;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.service.AdminService;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RestController
public class AdminController {

    @Autowired
    AdminService A_Service;

    @PostMapping("/PostAdminData")
    public void PostAdminData(@RequestBody Admin admin)
    {
        A_Service.PostAdminData(admin);
    }

    @GetMapping("/GetAllAdminData")
    public List<Admin> GetAllAdminData()
    {
        return A_Service.GetAllAdminData();
    }

    @PostMapping("/adimnlogin")
    public String adimnlogin(@RequestBody Admin loginRequest) {
        return A_Service.adimnlogin(loginRequest.getEmailId(), loginRequest.getPwd());
    }

}
