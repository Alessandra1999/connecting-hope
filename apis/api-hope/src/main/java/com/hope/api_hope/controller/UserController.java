package com.hope.api_hope.controller;

import com.hope.api_hope.dto.OngDTO;
import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id){
        UserDTO userDTO = service.getUserById(id);

        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/nonProfit")
    public ResponseEntity<OngDTO> getUserOngById(@PathVariable Long id){
        OngDTO ongDTO = service.getUserOngById(id);

        return ongDTO != null ? ResponseEntity.ok(ongDTO) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{name}")
    public List<OngDTO> getUserOngByName(@PathVariable String name){
        return service.getAllOngsByName(name);
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO){
        return service.createUser(userDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id,@RequestBody UserDTO userDTO){
        UserDTO updateUser = service.updateUser(id, userDTO);

        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        service.deleteUser(id);
    }

}
