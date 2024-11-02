package com.hope.api_hope.service;

import com.hope.api_hope.controller.request.DonationsRequest;
import com.hope.api_hope.dto.response.DonationResponse;
import com.hope.api_hope.mapper.DonationMapper;
import com.hope.api_hope.model.Donations;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.DonationRepository;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import com.hope.api_hope.service.utils.NowService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;


@Service
public class PostDonationService {

    @Autowired
    NonProfitsCampaignRepository nonProfitsCampaignRepository;

    @Autowired
    DonationRepository donationRepository;

    @Autowired
    NowService nowService;

    @Transactional
    public DonationResponse addCampaignUpdate(DonationsRequest donationsRequest) {

        Donations donations = DonationMapper.toEntity(donationsRequest);
        NonProfitsCampaign nonProfitsCampaign = nonProfitsCampaignRepository
                .findById(donationsRequest.getNonProfitsCampaignId())
                .orElse(null);

        donations.setDayDonated(nowService.getDate());

        double updatedFunds = nonProfitsCampaign.getFundsCurrent() + donationsRequest.getValue().doubleValue();

        nonProfitsCampaign.setFundsCurrent(updatedFunds);

        nonProfitsCampaign.addDonations(donations);
        donations.setNonProfitsCampaign(nonProfitsCampaign);

        donationRepository.save(donations);
        nonProfitsCampaignRepository.save(nonProfitsCampaign);

        return DonationMapper.toResponse(donations);
    }


}
