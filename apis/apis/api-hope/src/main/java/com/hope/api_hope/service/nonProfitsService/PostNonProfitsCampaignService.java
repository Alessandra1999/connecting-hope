package com.hope.api_hope.service.nonProfitsService;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignPageResponse.NonProfitsCampaignResponse;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostNonProfitsCampaignService {

    @Autowired
    NonProfitsCampaignRepository nonProfitsCampaignRepository;


    @Transactional
    public NonProfitsCampaignResponse addNonProfitsCampaign(NonProfitsCampaignRequest request) {

        NonProfitsCampaign campaign = NonProfitsCampaignMapper.toEntity(request);

        nonProfitsCampaignRepository.save(campaign);

        return NonProfitsCampaignMapper.toResponse(campaign);
    }
}
