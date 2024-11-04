package com.hope.api_hope.repository;

import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.model.NonProfitsCampaign;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonProfitsCampaignRepository extends JpaRepository<NonProfitsCampaign, Long> {

    Page<NonProfitsCampaign> findAll(Pageable pageable);

    Page<NonProfitsCampaign> findByActiveTrue(Pageable pageable);

    Page<NonProfitsCampaign> findByNonProfitsId(Long id, Pageable pageable);
}
