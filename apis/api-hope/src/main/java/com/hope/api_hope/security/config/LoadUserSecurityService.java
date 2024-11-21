package com.hope.api_hope.security.config;

import com.hope.api_hope.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class LoadUserSecurityService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public LoadUserSecurityService() {
    }

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return (UserDetails)this.userRepository.findByEmail(email).map(UserSecurity::new).orElseThrow(() -> {
            return new UsernameNotFoundException("Invalid Credentials");
        });
    }
}