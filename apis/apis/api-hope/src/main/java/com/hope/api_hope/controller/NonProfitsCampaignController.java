package com.hope.api_hope.controller;

import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignPageResponse.NonProfitsCampaignResponse;
import com.hope.api_hope.service.nonProfitsService.GetNonProfitsCampaignPageService;
import com.hope.api_hope.service.nonProfitsService.PostNonProfitsCampaignService;
import com.hope.api_hope.service.nonProfitsService.UpdateNonProfitsCampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;

@RestController
@RequestMapping("/nonProfitsCampaigns")
public class NonProfitsCampaignController {

    @Autowired
    private GetNonProfitsCampaignPageService getNonProfitsCampaignPageService;

    @Autowired
    private PostNonProfitsCampaignService postNonProfitsCampaignService;

    @Autowired
    private UpdateNonProfitsCampaignService updateNonProfitsCampaignService;

    @GetMapping
    public Page<NonProfitsCampaignResponse> nonProfitsCampaigns(Pageable pageable) {
        return getNonProfitsCampaignPageService.list(pageable);
    }

    @PutMapping("/{id}")
    public NonProfitsCampaignResponse update(@RequestBody NonProfitsCampaignRequest nonProfitsCampaignRequest, @PathVariable Long id) {
        return updateNonProfitsCampaignService.update(nonProfitsCampaignRequest,id);
    }

    @PostMapping
    public NonProfitsCampaignResponse addNonProfitsCampaign(@RequestBody NonProfitsCampaignRequest nonProfitsCampaignRequest) {
        return postNonProfitsCampaignService.addNonProfitsCampaign(nonProfitsCampaignRequest);
    }
}