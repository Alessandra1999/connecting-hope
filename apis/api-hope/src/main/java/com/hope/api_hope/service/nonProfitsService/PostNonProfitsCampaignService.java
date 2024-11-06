package com.hope.api_hope.service.nonProfitsService;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.model.NonProfits;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import com.hope.api_hope.repository.UserOngRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostNonProfitsCampaignService {

    @Autowired
    NonProfitsCampaignRepository nonProfitsCampaignRepository;

    @Autowired
    UserOngRepository userOngRepository;


    @Transactional
    public NonProfitsCampaignResponse addNonProfitsCampaign(NonProfitsCampaignRequest request) {

        NonProfits nonProfits = userOngRepository.findById(request.getNonprofits_id()).orElse(null);
        NonProfitsCampaign campaign = NonProfitsCampaignMapper.toEntity(request);

        nonProfits.addNonProfitsCampaign(campaign);
        campaign.setNonProfits(nonProfits);

        userOngRepository.save(nonProfits);
        nonProfitsCampaignRepository.save(campaign);

        return NonProfitsCampaignMapper.toResponse(campaign);

    }
}
