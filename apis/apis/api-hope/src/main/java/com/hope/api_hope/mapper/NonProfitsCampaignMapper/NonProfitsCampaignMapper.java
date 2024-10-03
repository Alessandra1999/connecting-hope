package com.hope.api_hope.mapper.NonProfitsCampaignMapper;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignPageResponse.NonProfitsCampaignResponse;
import com.hope.api_hope.model.NonProfitsCampaign;

import java.math.BigDecimal;

public class NonProfitsCampaignMapper {

    public static NonProfitsCampaign toEntity(NonProfitsCampaignRequest request) {
        NonProfitsCampaign nonProfitsCampaign = new NonProfitsCampaign();
        nonProfitsCampaign.setCampaignEnd(request.getCampaignEnd());
        nonProfitsCampaign.setCampaignStart(request.getCampaignStart());
        nonProfitsCampaign.setDescription(request.getDescription());
        nonProfitsCampaign.setCampaignStatus(request.getCampaignStatus());
        nonProfitsCampaign.setImage(request.getImage());
        nonProfitsCampaign.setName(request.getName());
        nonProfitsCampaign.setFundsGoal(request.getFundsGoal());
        nonProfitsCampaign.setFundsCurrent(request.getFundsCurrent());

        return nonProfitsCampaign;
    }

    public static NonProfitsCampaignResponse toResponse(NonProfitsCampaign nonProfitsCampaign) {
        NonProfitsCampaignResponse response = new NonProfitsCampaignResponse();
        response.setId(nonProfitsCampaign.getId());
        response.setName(nonProfitsCampaign.getName());
        response.setDescription(nonProfitsCampaign.getDescription());
        response.setImage(nonProfitsCampaign.getImage());
        response.setCampaignEnd(nonProfitsCampaign.getCampaignEnd());
        response.setCampaignStart(nonProfitsCampaign.getCampaignStart());
        response.setFundsCurrent(BigDecimal.valueOf(nonProfitsCampaign.getFundsCurrent()));
        response.setFundsGoal(BigDecimal.valueOf(nonProfitsCampaign.getFundsGoal()));

        return response;
    }
}
