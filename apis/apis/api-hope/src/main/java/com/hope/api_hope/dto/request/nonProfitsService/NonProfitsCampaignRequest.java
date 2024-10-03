package com.hope.api_hope.dto.request.nonProfitsService;

import com.hope.api_hope.model.enums.CampaignStatus;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

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
    private LocalDate campaignEnd;

    @NotNull
    private LocalDate campaignStart;

    @NotNull
    private CampaignStatus campaignStatus;

    @NotNull
    private double fundsCurrent;
}
