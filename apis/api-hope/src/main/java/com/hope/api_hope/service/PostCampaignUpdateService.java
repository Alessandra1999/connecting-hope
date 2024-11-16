package com.hope.api_hope.service;

import com.hope.api_hope.controller.request.CampaignUpdateRequest;
import com.hope.api_hope.controller.response.CampaignUpdateResponse;
import com.hope.api_hope.mapper.CampaignUpdateMapper;
import com.hope.api_hope.model.CampaignUpdate;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.CampaignUpdateRepository;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import com.hope.api_hope.service.utils.NowService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostCampaignUpdateService {

    @Autowired
    CampaignUpdateRepository campaignUpdateRepository;

    @Autowired
    NonProfitsCampaignRepository nonProfitsCampaignRepository;

    @Autowired
    NowService nowService;


    @Transactional
    public CampaignUpdateResponse addCampaignUpdate(CampaignUpdateRequest request) {

        CampaignUpdate campaignUpdate = CampaignUpdateMapper.toEntity(request);
        NonProfitsCampaign nonProfitsCampaign = nonProfitsCampaignRepository.findById(request.getNonProfitsCampaignId()).orElse(null);

        campaignUpdate.setDatePosted(nowService.getDate());

        nonProfitsCampaign.addCampaignUpdate(campaignUpdate);
        campaignUpdate.setNonProfitsCampaign(nonProfitsCampaign);

        campaignUpdateRepository.save(campaignUpdate);
        nonProfitsCampaignRepository.save(nonProfitsCampaign);

        return CampaignUpdateMapper.toResponse(campaignUpdate);
    }
}

