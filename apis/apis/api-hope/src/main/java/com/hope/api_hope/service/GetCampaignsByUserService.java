package com.hope.api_hope.service;

import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetCampaignsByUserService {

    @Autowired
    NonProfitsCampaignRepository nonProfitsCampaignRepository;

    @Transactional
    public Page<NonProfitsCampaignResponse> list(Long id, Pageable pageable) {
        Page<NonProfitsCampaign> campaignsByUser = nonProfitsCampaignRepository.findByNonProfitsId(id, pageable);

        Page<NonProfitsCampaignResponse> response = campaignsByUser.map(NonProfitsCampaignMapper::toResponse);

        return response;
    }
}
