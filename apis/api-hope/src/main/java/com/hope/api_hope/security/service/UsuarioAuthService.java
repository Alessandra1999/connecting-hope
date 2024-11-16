package com.hope.api_hope.security.service;

import com.hope.api_hope.dto.UserDTO;
import com.hope.api_hope.model.User;
import com.hope.api_hope.repository.UserRepository;
import com.hope.api_hope.security.config.UserSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


import static com.hope.api_hope.security.mapper.UserSecurityMapper.toResponse;
import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Service
public class UsuarioAuthService {

    @Autowired
    private UserRepository userRepository;

    public Long getId() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getPrincipal() instanceof UserSecurity) {
            return (long) Math.toIntExact(((UserSecurity) authentication.getPrincipal()).getId());
        }

        return null;
    }

    public User get() {
        Long id = getId();

        if (isNull(id)) {
            return null;
        }

        return userRepository.findById(getId()).orElse(null);
    }

    public UserDTO getResponse() {
        User entity = get();
        return nonNull(entity) ? toResponse(entity) : new UserDTO();
    }
}