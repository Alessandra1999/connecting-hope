package com.hope.api_hope.security.config;


import com.hope.api_hope.model.User;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collections;
import java.util.List;


@Getter
public class UserSecurity implements UserDetails {

    private final Long id;
    private final String username;
    private final String password;
    private final List<SimpleGrantedAuthority> authorities;
    private final boolean accountNonExpired;
    private final boolean accountNonLocked;
    private final boolean credentialsNonExpired;
    private final boolean enabled;

    public UserSecurity(User user) {

        this.id = (long) user.getId();
        this.username = user.getEmail();
        this.password = user.getPassword();
        this.accountNonExpired = true;
        this.accountNonLocked = true;
        this.credentialsNonExpired = true;
        this.enabled = true;

        this.authorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));
    }
}
