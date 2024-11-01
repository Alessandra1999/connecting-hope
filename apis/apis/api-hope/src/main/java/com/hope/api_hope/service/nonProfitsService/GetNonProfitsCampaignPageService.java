package com.hope.api_hope.service.nonProfitsService;

import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class GetNonProfitsCampaignPageService {

    @Autowired
    private NonProfitsCampaignRepository nonProfitsCampaignRepository;

    public Page<NonProfitsCampaignResponse> list(Pageable pageable) {

        Page<NonProfitsCampaign> nonProfitsCampaigns = nonProfitsCampaignRepository.findByActiveTrue(pageable);

        Page<NonProfitsCampaignResponse> response = nonProfitsCampaigns.map(NonProfitsCampaignMapper::toResponse);

        return response;
    }
}
