package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;


//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo U_Repo;


    public void PostUserData( User user)
    {
        U_Repo.save(user);
    }

    public List<User> GetAllUserData()
    {
        return U_Repo.findAll();
    }


    public String userlogin(String email, String pwd) {
        User user = U_Repo.findByEmailIdAndPwd(email,pwd);
        if (user == null) {
            return "failure";
        } else {
            return "Login Successful!";
        }
    }

}
