package com.hope.api_hope.repository;

import com.hope.api_hope.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
     Optional<User> findByEmail(String email);
//    Optional<User> findByUsername(String nome);
}
