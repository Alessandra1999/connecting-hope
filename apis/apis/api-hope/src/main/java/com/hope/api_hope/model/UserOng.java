package com.hope.api_hope.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "NON_PROFITS")
public class UserOng {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNonProfit;

    @Column(nullable = false)
    private String nameNonProfit;

    @Column(nullable = false)
    private String emailNonprofit;

    @Column(nullable = false)
    private String photoNonProfit;

    @Column(nullable = false)
    private String addressNonprofit;

    @Column(nullable = false)
    private String passwordNonprofit;

    @Column(nullable = false)
    private String descriptionNonprofit;

    @Column(nullable = false)
    private String cnpjNonprofit;

    @OneToMany(mappedBy = "userOng")
    private List<NonProfitsCampaign> nonProfitsCampaigns = new ArrayList<>();

    public void addNonProfitsCampaign(NonProfitsCampaign nonProfitsCampaign) {
        this.nonProfitsCampaigns.add(nonProfitsCampaign);
        nonProfitsCampaign.setUserOng(this);
    }
}
