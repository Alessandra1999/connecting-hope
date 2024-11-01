package com.hope.api_hope.mapper;

import com.hope.api_hope.controller.request.DonationsRequest;
import com.hope.api_hope.dto.response.DonationResponse;
import com.hope.api_hope.model.Donations;

public class DonationMapper {

    public static Donations toEntity(DonationsRequest request) {
        Donations donations = new Donations();
        donations.setValue(request.getValue());
        donations.setDonorId(request.getDonorId());
        donations.setDonorName(request.getDonorName());

        return donations;
    }

    public static DonationResponse toResponse(Donations donations) {
        return DonationResponse.builder()
                .value(donations.getValue())
                .donorId(donations.getDonorId())
                .donorName(donations.getDonorName())
                .dayDonated(donations.getDayDonated())
                .id(donations.getId())
                .build();
    }
}
