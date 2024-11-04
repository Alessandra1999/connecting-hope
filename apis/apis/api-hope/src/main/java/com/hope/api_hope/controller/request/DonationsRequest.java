package com.hope.api_hope.controller.request;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Builder
@Getter
@Setter
public class DonationsRequest {

    @Column(nullable = false)
    private Long donorId;

    @Column(nullable = false)
    private String donorName;

    @Column(nullable = false)
    private BigInteger value;

    @Column(nullable = false)
    private Long nonProfitsCampaignId;

}
