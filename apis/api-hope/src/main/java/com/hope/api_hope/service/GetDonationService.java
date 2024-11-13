package com.hope.api_hope.service;

import com.hope.api_hope.dto.response.DonationResponse;
import com.hope.api_hope.mapper.DonationMapper;
import com.hope.api_hope.repository.DonationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetDonationService {

    @Autowired
    private DonationRepository donationRepository;

    @Transactional
    public Page<DonationResponse> list(Pageable pageable) {
        Page<DonationResponse> donationResponses = donationRepository.findAll(pageable).map(DonationMapper::toResponse);
        return donationResponses;

    }
}
