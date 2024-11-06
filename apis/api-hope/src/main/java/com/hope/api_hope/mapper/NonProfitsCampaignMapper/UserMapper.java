package com.hope.api_hope.mapper.NonProfitsCampaignMapper;

import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.model.User;

public class UserMapper {

    public static User toEntity(UserDTO userDTO) {
        User user = new User();
        user.setPhotoUser(userDTO.getPhotoUser());
        user.setAddressUser(userDTO.getAddressUser());
        user.setEmail(userDTO.getEmailUser());
        user.setNameUser(userDTO.getNameUser());
        user.setPassword(userDTO.getPasswordUser());

        return user;
    }

    public static UserDTO toUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setIdUser(user.getId());
        userDTO.setPhotoUser(user.getPhotoUser());
        userDTO.setAddressUser(user.getAddressUser());
        userDTO.setEmailUser(user.getEmail());
        userDTO.setNameUser(user.getNameUser());
        userDTO.setPasswordUser(user.getPassword());

        return userDTO;

    }
}
