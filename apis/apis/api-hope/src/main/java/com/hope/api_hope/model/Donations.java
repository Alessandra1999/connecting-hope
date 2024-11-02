package com.hope.api_hope.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="DONATIONS")
public class Donations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long donorId;

    @Column(nullable = false)
    private String donorName;

    @Column(nullable = false)
    private BigInteger value;

    @Column(nullable = false)
    private LocalDate dayDonated;

    @ManyToOne
    @JoinColumn(name = "non_profits_campaign_id")
    private NonProfitsCampaign nonProfitsCampaign;
}
