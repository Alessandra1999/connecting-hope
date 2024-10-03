package com.hope.api_hope.service.nonProfitsService;

import com.hope.api_hope.dto.response.NonProfitsCampaignPageResponse.NonProfitsCampaignResponse;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;

@Service
public class GetNonProfitsCampaignPageService {

    @Autowired
    private NonProfitsCampaignRepository nonProfitsCampaignRepository;

    public Page<NonProfitsCampaignResponse> list(Pageable pageable) {

        Page<NonProfitsCampaign> nonProfitsCampaigns = nonProfitsCampaignRepository.findAll(pageable);

        Page<NonProfitsCampaignResponse> response = nonProfitsCampaigns.map(NonProfitsCampaignMapper::toResponse);

        return response;
    }
}
