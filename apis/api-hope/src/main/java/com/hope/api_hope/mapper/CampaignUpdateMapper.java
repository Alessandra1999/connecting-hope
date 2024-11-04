package com.hope.api_hope.mapper;

import com.hope.api_hope.controller.request.CampaignUpdateRequest;
import com.hope.api_hope.controller.response.CampaignUpdateResponse;
import com.hope.api_hope.model.CampaignUpdate;

public class CampaignUpdateMapper {

    public static CampaignUpdate toEntity(CampaignUpdateRequest request){
        CampaignUpdate campaignUpdate = new CampaignUpdate();
        campaignUpdate.setDescription(request.getDescription());

        return campaignUpdate;
    }

    public static CampaignUpdateResponse toResponse(CampaignUpdate campaignUpdate){
        return CampaignUpdateResponse.builder()
                .id(campaignUpdate.getId())
                .description(campaignUpdate.getDescription())
                .datePosted(campaignUpdate.getDatePosted())
                .nonProfitsCampaignId(campaignUpdate.getNonProfitsCampaign().getId())
                .build();

    }
}
