package com.hope.api_hope.mapper.NonProfitsCampaignMapper;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.model.NonProfitsCampaign;

import java.math.BigDecimal;

public class NonProfitsCampaignMapper {

    public static NonProfitsCampaign toEntity(NonProfitsCampaignRequest request) {
        NonProfitsCampaign nonProfitsCampaign = new NonProfitsCampaign();
        nonProfitsCampaign.setCampaignEnd(request.getCampaignEnd());
        nonProfitsCampaign.setCampaignStart(request.getCampaignStart());
        nonProfitsCampaign.setDescription(request.getDescription());
        nonProfitsCampaign.setActive(true);
        nonProfitsCampaign.setCampaignStatus(request.getCampaignStatus());
        nonProfitsCampaign.setImage(request.getImage());
        nonProfitsCampaign.setName(request.getName());
        nonProfitsCampaign.setFundsGoal(request.getFundsGoal());
        nonProfitsCampaign.setFundsCurrent(request.getFundsCurrent());

        return nonProfitsCampaign;
    }

    public static NonProfitsCampaignResponse toResponse(NonProfitsCampaign nonProfitsCampaign) {
        return NonProfitsCampaignResponse.builder()
                .id(nonProfitsCampaign.getId())
                .campaignEnd(nonProfitsCampaign.getCampaignEnd())
                .campaignStart(nonProfitsCampaign.getCampaignStart())
                .description(nonProfitsCampaign.getDescription())
                .fundsCurrent(BigDecimal.valueOf(nonProfitsCampaign.getFundsCurrent()))
                .image(nonProfitsCampaign.getImage())
                .name(nonProfitsCampaign.getName())
                .fundsGoal(BigDecimal.valueOf(nonProfitsCampaign.getFundsGoal()))
                .nonProfitsId(nonProfitsCampaign.getUserOng().getIdNonProfit())
                .build();

    }
}
