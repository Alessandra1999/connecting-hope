package com.hope.api_hope.repository;

import com.hope.api_hope.model.NonProfits;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserOngRepository extends JpaRepository<NonProfits, Long> {
    Optional<Object> findByNameNonProfit(String name);
}
