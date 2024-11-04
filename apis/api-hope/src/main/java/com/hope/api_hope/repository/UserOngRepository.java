package com.hope.api_hope.repository;

import com.hope.api_hope.model.NonProfits;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserOngRepository extends JpaRepository<NonProfits, Long> {
}
