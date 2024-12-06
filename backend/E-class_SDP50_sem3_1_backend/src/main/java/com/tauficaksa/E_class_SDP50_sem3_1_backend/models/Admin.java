package com.tauficaksa.E_class_SDP50_sem3_1_backend.models;

import jakarta.persistence.*;
import org.springframework.stereotype.Component;

@Component
@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Fixed series-based ID using auto-increment

    /* Personal info and status */
    private String name;

    /* Login credentials */
    @Column(nullable = false, unique = true)
    private String emailId;
    private String pwd;

    /* Constructors */
    public Admin() {}

    public Admin(Long id, String name, String emailId, String pwd) {
        this.id = id;
        this.name = name;
//        this.status = status;
        this.emailId = emailId;
        this.pwd = pwd;
    }

    /* Getters and Setters */
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
//                ", status=" + status +
                ", emailId='" + emailId + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }
}
