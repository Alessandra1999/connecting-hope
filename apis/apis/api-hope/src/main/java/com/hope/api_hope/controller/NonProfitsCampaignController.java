package com.hope.api_hope.controller;

import com.hope.api_hope.controller.request.CampaignUpdateRequest;
import com.hope.api_hope.controller.response.CampaignUpdateResponse;
import com.hope.api_hope.dto.request.nonProfitsService.NonProfitsCampaignRequest;
import com.hope.api_hope.dto.response.NonProfitsCampaignResponse;
import com.hope.api_hope.service.GetCampaignUpdatesByCampaignIdService;
import com.hope.api_hope.service.PostCampaignUpdateService;
import com.hope.api_hope.service.nonProfitsService.GetNonProfitsCampaignPageService;
import com.hope.api_hope.service.nonProfitsService.PostNonProfitsCampaignService;
import com.hope.api_hope.service.nonProfitsService.UpdateNonProfitsCampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/nonProfitsCampaigns")
public class NonProfitsCampaignController {

    @Autowired
    private GetNonProfitsCampaignPageService getNonProfitsCampaignPageService;

    @Autowired
    private PostNonProfitsCampaignService postNonProfitsCampaignService;

    @Autowired
    private UpdateNonProfitsCampaignService updateNonProfitsCampaignService;

    @Autowired
    private PostCampaignUpdateService postCampaignUpdateService;

    @Autowired
    private GetCampaignUpdatesByCampaignIdService getCampaignUpdatesByCampaignIdService;

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

    @PostMapping
    public CampaignUpdateResponse addCampaignUpdate(@RequestBody CampaignUpdateRequest request) {
        return postCampaignUpdateService.addCampaignUpdate(request);
    }

    @GetMapping("/updates/{id}")
    public Page<CampaignUpdateResponse> updateCampaign(@PathVariable Long id, Pageable pageable) {
        return getCampaignUpdatesByCampaignIdService.list(id, pageable);
    }
}