package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;


//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.TestingDB;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
import com.tauficaksa.E_class_SDP50_sem3_1_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepo U_Repo;
    private BCryptPasswordEncoder P_encoder = new BCryptPasswordEncoder(12);


    public void PostUserData( User user)
    {
        user.setPwd(P_encoder.encode(user.getPwd()));
        U_Repo.save(user);
    }

    public List<User> GetAllUserData()
    {
        return U_Repo.findAll();
    }


    public String userlogin(String email, String pwd) {

        System.out.println(pwd);
        User user = U_Repo.findByEmailId(email);
        if (user == null) {
            return "failure";
        } else if( !user.isStatus()){
            return "user block";
        }
        else if(P_encoder.matches(pwd, user.getPwd())){
            return  "Login Successful!";
        }
        else {
            return "failure";
        }
    }

    public void updateuserbyID(Long id, Boolean status) {
        User user = U_Repo.findById(id);

        user.setStatus((status));
//        user.setPwd(P_encoder.encode(user.getPwd()));
        U_Repo.save(user);
    }


    public void updatepwduserbyID(Long id, String pwd) {
        User user = U_Repo.findById(id);

         user.setPwd(P_encoder.encode(pwd));
//        user.setPwd(P_encoder.encode(user.getPwd()));
        U_Repo.save(user);
    }


}
