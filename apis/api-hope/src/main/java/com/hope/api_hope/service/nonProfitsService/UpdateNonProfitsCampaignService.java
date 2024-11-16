package com.hope.api_hope.service.nonProfitsService;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.model.NonProfitsCampaign;
import com.hope.api_hope.repository.NonProfitsCampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static com.hope.api_hope.mapper.NonProfitsCampaignMapper.NonProfitsCampaignMapper.toResponse;

@Service
public class UpdateNonProfitsCampaignService {

    @Autowired
    private NonProfitsCampaignRepository nonProfitsCampaignRepository;

    public NonProfitsCampaignResponse update(NonProfitsCampaignRequest request, Long id) {

        NonProfitsCampaign nonProfitsCampaign = nonProfitsCampaignRepository.findById(id).get();

        nonProfitsCampaign.setName(request.getName());
        nonProfitsCampaign.setFundsCurrent(request.getFundsCurrent());
        nonProfitsCampaign.setCampaignStatus(request.getCampaignStatus());
        nonProfitsCampaign.setCampaignEnd(request.getCampaignEnd());
        nonProfitsCampaign.setImage(request.getImage());
        nonProfitsCampaign.setDescription(request.getDescription());
        nonProfitsCampaign.setCampaignStart(request.getCampaignStart());
        nonProfitsCampaign.setFundsGoal(request.getFundsGoal());

        nonProfitsCampaignRepository.save(nonProfitsCampaign);

        return toResponse(nonProfitsCampaign);

    }
}
