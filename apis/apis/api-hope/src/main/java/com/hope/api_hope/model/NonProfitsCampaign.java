package com.hope.api_hope.model;

import com.hope.api_hope.model.enums.CampaignStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name="NONPROFITSCAMPAIGN")
public class NonProfitsCampaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

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

    @ManyToOne
    @JoinColumn(name = "nonprofits_id")
    private UserOng userOng;

    @OneToMany(mappedBy = "donations")
    private List<Donations> donations = new ArrayList<>();

    public void addDonations(Donations donation) {
        this.donations.add(donation);
        donation.setNonProfitsCampaign(this);
    }
}
