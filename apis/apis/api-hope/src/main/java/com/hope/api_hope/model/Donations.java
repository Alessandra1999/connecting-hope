package com.hope.api_hope.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="DONATIONS")
public class Donations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String donorId;

    @Column(nullable = false)
    private String donorName;

    @Column(nullable = false)
    private String value;

    @Column(nullable = false)
    private Date dayDonated;

    @ManyToOne
    @JoinColumn(name = "nonprofitscampaign_id")
    private NonProfitsCampaign nonProfitsCampaign;
}
