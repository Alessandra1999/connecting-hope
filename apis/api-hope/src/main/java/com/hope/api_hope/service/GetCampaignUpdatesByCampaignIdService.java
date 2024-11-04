package com.hope.api_hope.service;

import com.hope.api_hope.controller.response.CampaignUpdateResponse;
import com.hope.api_hope.mapper.CampaignUpdateMapper;
import com.hope.api_hope.repository.CampaignUpdateRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetCampaignUpdatesByCampaignIdService {

    @Autowired
    private CampaignUpdateRepository campaignUpdateRepository;

    @Transactional
    public Page<CampaignUpdateResponse> list(Long id, Pageable pageable) {

        Page<CampaignUpdateResponse> campaignUpdates = campaignUpdateRepository
                .findByNonProfitsCampaignId(id, pageable)
                .map(CampaignUpdateMapper::toResponse);

        return campaignUpdates;

    }
}
