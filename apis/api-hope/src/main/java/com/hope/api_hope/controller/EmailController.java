package com.hope.api_hope.controller;

import com.hope.api_hope.controller.request.EmailRequest;
import com.hope.api_hope.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emails")
public class EmailController {

    @Autowired
    private SendEmailService sendEmailService;

    @PostMapping("/send")
    public void sendEmail(@RequestBody EmailRequest emailRequest) {
        sendEmailService.sendEmail(emailRequest);
    }
}
