package com.hope.api_hope.security.mapper;

import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.model.User;

public class UserSecurityMapper {
    public static User toEntity(UserDTO request) {
        User entity = new User();
        entity.setEmail(request.getEmailUser());
        entity.setNameUser(request.getNameUser());
        entity.setAddressUser(request.getAddressUser());
        entity.setPhotoUser(request.getPhotoUser());
        return entity;
    }

    public static UserDTO toResponse(User entity) {
        UserDTO response = new UserDTO();
        response.setIdUser(response.getIdUser());
        response.setNameUser(response.getNameUser());
        response.setEmailUser(response.getEmailUser());
        response.setPhotoUser(response.getPhotoUser());
        response.setAddressUser(response.getAddressUser());

        return response;
    }
}
