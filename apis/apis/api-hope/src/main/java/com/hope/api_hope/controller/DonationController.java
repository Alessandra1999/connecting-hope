package com.hope.api_hope.controller;

import com.hope.api_hope.dto.response.DonationResponse;
import com.hope.api_hope.service.GetDonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @Autowired
    private GetDonationService getDonationService;

    @GetMapping
    public Page<DonationResponse> donations(Pageable pageable) {
        return getDonationService.list(pageable);
    }
}
