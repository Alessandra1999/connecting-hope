package com.hope.api_hope.security.controller;


import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.security.service.UsuarioAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UsuarioAuthService service;

    @PostMapping
    public UserDTO login() {
        return service.getResponse();
    }
}
