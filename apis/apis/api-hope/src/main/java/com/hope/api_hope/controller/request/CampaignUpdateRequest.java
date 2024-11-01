package com.hope.api_hope.controller.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class CampaignUpdateRequest {

    private String description;

    private Long nonProfitsCampaignId;
}
