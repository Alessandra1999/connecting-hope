package com.hope.api_hope.model;

import com.hope.api_hope.model.enums.CampaignStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name="NON_PROFITS_CAMPAIGN")
public class NonProfitsCampaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private double fundsGoal;

    @Column(nullable = false)
    private double fundsCurrent;

    @Column(nullable = false)
    private LocalDate campaignStart;

    @Column(nullable = false)
    private LocalDate campaignEnd;

    @Column(nullable = false)
    private CampaignStatus campaignStatus;

    @Column(nullable = false)
    private Boolean active;

    @ManyToOne
    @JoinColumn(name = "non_profits_id")
    private NonProfits nonProfits;

    @OneToMany(mappedBy = "nonProfitsCampaign")
    private List<Donations> donations = new ArrayList<>();
    public void addDonations(Donations donation) {
        this.donations.add(donation);
        donation.setNonProfitsCampaign(this);
    }

    @OneToMany(mappedBy = "nonProfitsCampaign")
    private List<CampaignUpdate> campaignUpdates = new ArrayList<>();
    public void addCampaignUpdate(CampaignUpdate campaignUpdate) {
        this.campaignUpdates.add(campaignUpdate);
        campaignUpdate.setNonProfitsCampaign(this);
    }
}

