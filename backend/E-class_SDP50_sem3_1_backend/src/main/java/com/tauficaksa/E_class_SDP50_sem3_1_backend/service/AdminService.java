package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;


//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.Admin;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.AdminRepo;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminRepo A_Repo;
    private BCryptPasswordEncoder P_encoder = new BCryptPasswordEncoder(12);


    public void PostAdminData( Admin admin)
    {
        admin.setPwd(P_encoder.encode(admin.getPwd()));
        A_Repo.save(admin);
    }

    public List<Admin> GetAllAdminData()
    {
        return A_Repo.findAll();
    }


    public String adimnlogin(String email, String pwd) {
        System.out.println(pwd);
        Admin admin = A_Repo.findByEmailId(email);
        if (admin == null) {
            System.out.println("tauficaksa");
            return "failure";
        }else if(P_encoder.matches(pwd, admin.getPwd())){
            return  "Login Successful!";
        }
        else {
            return "failure";
        }
    }

}
