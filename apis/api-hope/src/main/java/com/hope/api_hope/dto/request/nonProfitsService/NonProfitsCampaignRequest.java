package com.hope.api_hope.dto.request.nonProfitsService;

import com.hope.api_hope.model.enums.CampaignStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

@Builder
@Getter
@Setter
public class NonProfitsCampaignRequest {

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private String image;

    @NotNull
    private double fundsGoal;

    @NotNull
    private Long nonprofits_id;

    @NotNull
    private LocalDate campaignEnd;

    @NotNull
    private LocalDate campaignStart;

    @NotNull
    private CampaignStatus campaignStatus;

    @NotNull
    private double fundsCurrent;

}
