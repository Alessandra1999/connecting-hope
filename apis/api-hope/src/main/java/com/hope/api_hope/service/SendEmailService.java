package com.hope.api_hope.service;

import com.hope.api_hope.controller.request.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(EmailRequest emailRequest) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(emailRequest.getEmail());
        message.setSubject(emailRequest.getSubject());
        message.setText(emailRequest.getBody());

        javaMailSender.send(message);
    }
}

