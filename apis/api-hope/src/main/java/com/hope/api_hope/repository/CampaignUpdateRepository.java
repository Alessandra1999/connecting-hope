package com.hope.api_hope.repository;

import com.hope.api_hope.model.CampaignUpdate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignUpdateRepository extends JpaRepository<CampaignUpdate,Long> {

    Page<CampaignUpdate> findByNonProfitsCampaignId(Long id, Pageable pageable);
}
