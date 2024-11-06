package com.hope.api_hope.controller.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Builder
public class CampaignUpdateResponse {

    private Long id;
    private String description;
    private LocalDate datePosted;
    private Long nonProfitsCampaignId;
}
