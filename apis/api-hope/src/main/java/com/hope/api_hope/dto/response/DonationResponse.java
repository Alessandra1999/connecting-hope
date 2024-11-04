package com.hope.api_hope.dto.response;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDate;

@Builder
@Setter
@Getter
public class DonationResponse {

    private Long id;

    @Column(nullable = false)
    private Long donorId;

    @Column(nullable = false)
    private String donorName;

    @Column(nullable = false)
    private BigInteger value;

    @Column(nullable = false)
    private LocalDate dayDonated;

}
