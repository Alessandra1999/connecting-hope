package com.hope.api_hope.repository;

import com.hope.api_hope.model.NonProfitsCampaign;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;

public interface NonProfitsCampaignRepository extends JpaRepository<NonProfitsCampaign, Long> {

    Page<NonProfitsCampaign> findAll(Pageable pageable);
}
