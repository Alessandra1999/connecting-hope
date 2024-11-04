package com.hope.api_hope.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="CAMPAIGN_UPDATES")
public class CampaignUpdate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate datePosted;

    private String description;

    @ManyToOne
    @JoinColumn(name = "non_profits_campaign_id")
    private NonProfitsCampaign nonProfitsCampaign;

}
