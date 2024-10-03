package com.hope.api_hope.service;

import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.dto.OngDTO;
import com.hope.api_hope.model.User;
import com.hope.api_hope.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getAllUsers(){
        return userRepository
                .findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(int id){
        Optional<User> user = userRepository.findById(id);
        return user.map(this::convertToDTO).orElse(null);
    }

    public UserDTO getUserOngById(int id){
        Optional<User> user = userRepository.findById(id);
        return user.map(this::convertToDTO).orElse(null);
    }

    public UserDTO createUser(UserDTO userDTO){
        User user = new User();
        user.setNameUser(userDTO.getNameUser());
        user.setPhotoUser(userDTO.getPhotoUser());
        user.setEmailUser(userDTO.getEmailUser());
        user.setPasswordUser(userDTO.getPasswordUser());
        user.setAddressUser(userDTO.getAddressUser());
        userRepository.save(user);

        return convertToDTO(user);
    }


    public UserDTO updateUser(int id, UserDTO userDTO){
        Optional<User> userOptional = userRepository.findById(id);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setNameUser(userDTO.getNameUser());
            user.setPhotoUser(userDTO.getPhotoUser());
            user.setEmailUser(userDTO.getEmailUser());
            user.setPasswordUser(userDTO.getPasswordUser());
            user.setAddressUser(userDTO.getAddressUser());
            user.setThemeUser(user.getThemeUser());
            userRepository.save(user);
            return convertToDTO(user);
        }
        return null;
    }

    public void deleteUser(int id){
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(user.getIdUser());
        user.setNameUser(userDTO.getNameUser());
        user.setPhotoUser(userDTO.getPhotoUser());
        user.setEmailUser(userDTO.getEmailUser());
        user.setPasswordUser(userDTO.getPasswordUser());
        user.setAddressUser(userDTO.getAddressUser());

        return userDTO;
    }
}

