package com.hope.api_hope.dto.response.NonProfitsCampaignPageResponse;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NonProfitsCampaignResponse {
    private int id;
    private String name;
    private String description;
    private String image;
    private BigDecimal fundsGoal;
    private BigDecimal fundsCurrent;

    private LocalDate campaignStart;
    private LocalDate campaignEnd;
}
