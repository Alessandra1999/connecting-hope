package com.hope.api_hope.repository;

import com.hope.api_hope.model.Donations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donations, Long> {
}
