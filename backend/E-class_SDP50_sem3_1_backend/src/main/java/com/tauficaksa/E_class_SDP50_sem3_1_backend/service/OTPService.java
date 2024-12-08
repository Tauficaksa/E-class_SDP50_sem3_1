//package com.tauficaksa.E_class_SDP50_sem3_1_backend.service;
//
//import com.tauficaksa.E_class_SDP50_sem3_1_backend.models.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//import java.util.Random;
//
//@Service
//public class OTPService {
//
//    @Autowired
//    private JavaMailSender emailSender;
//
//    private String generatedOTP;
//    private JavaMailSender emailservice;
//
//    // Generate OTP
//    public String generateOTP() {
//        Random rand = new Random();
//        generatedOTP = String.format("%06d", rand.nextInt(1000000)); // Generates a 6-digit OTP
//        return generatedOTP;
//    }
//
//    public void sendOTPEmail(String email, User user) {
//        String otp = generateOTP();
//
//
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom("2200032421cseh@gmail.com");  // Your email address
//        message.setTo(user.getEmailId());  // Recipient's email address
//        message.setSubject("user registration validation by - taufic aksa");
//        message.setText("hi my name is Taufic aksa, developer of tauficaksa.me web site\n\n" +
//                "To register, please enter the OTP.\n\n" +
//                "Your OTP code is: " + otp);
//
//        emailservice.send(message);
//    }
//
//    public boolean validateOTP(String inputOtp) {
//        return generatedOTP != null && generatedOTP.equals(inputOtp);
//    }
//}