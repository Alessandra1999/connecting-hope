package com.hope.api_hope.controller;

import com.hope.api_hope.dto.response.DonationResponse;
import com.hope.api_hope.service.GetDonationService;
import com.hope.api_hope.service.StripeService;
import com.stripe.exception.StripeException;
import com.stripe.model.Account;
import com.stripe.model.PaymentIntent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donations")
public class DonationController {

    @Autowired
    private GetDonationService getDonationService;

    @Autowired
    private StripeService stripeService;

    @GetMapping
    public Page<DonationResponse> donations(Pageable pageable) {
        return getDonationService.list(pageable);
    }

    @PostMapping("/create-account")
    public Account createConnectedAccount(@RequestParam String email) throws StripeException {
        return stripeService.createConnectedAccount(email);
    }

    @PostMapping("/create-account-link")
    public String createAccountLink(@RequestParam String accountId) throws StripeException {
        return stripeService.createAccountLink(accountId);
    }

    @PostMapping("/create-payment-intent")
    public PaymentIntent donate(@RequestParam double amount,
                                @RequestParam String connectedAccountId,
                                @RequestParam(required = false) List<String> paymentMethodTypes) throws StripeException {
        System.out.println("Valor recebido no backend: " + amount);
        return stripeService.createDonation(amount, connectedAccountId, paymentMethodTypes);
    }
}