package com.hope.api_hope.dto.response;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NonProfitsCampaignResponse {
    private Long id;
    private String name;
    private String description;
    private String image;
    private BigDecimal fundsGoal;
    private BigDecimal fundsCurrent;
    private Long nonProfitsId;
    private LocalDate campaignStart;
    private LocalDate campaignEnd;
}
