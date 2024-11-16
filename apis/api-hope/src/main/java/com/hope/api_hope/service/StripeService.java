package com.hope.api_hope.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Account;
import com.stripe.model.AccountLink;
import com.stripe.model.PaymentIntent;
import com.stripe.param.AccountCreateParams;
import com.stripe.param.AccountLinkCreateParams;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StripeService {

    @Value("${stripe.api.key}")
    private String stripeSecretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeSecretKey;
    }

    public Account createConnectedAccount(String email) throws StripeException {
        AccountCreateParams params = AccountCreateParams.builder()
                .setType(AccountCreateParams.Type.STANDARD)
                .setCountry("BR")
                .setEmail(email)
                .build();

        return Account.create(params);
    }

    public String createAccountLink(String accountId) throws StripeException {
        AccountLinkCreateParams params = AccountLinkCreateParams.builder()
                .setAccount(accountId)
                .setRefreshUrl("http://localhost:8080/reauth")
                .setReturnUrl("http://localhost:8080/sucesso")
                .setType(AccountLinkCreateParams.Type.ACCOUNT_ONBOARDING)
                .build();

        AccountLink accountLink = AccountLink.create(params);
        return accountLink.getUrl();
    }

    public PaymentIntent createPaymentIntent(long amountInCents, String connectedAccountId, List<String> paymentMethodTypes) throws StripeException {
        List<String> methodTypes = new ArrayList<>(paymentMethodTypes != null ? paymentMethodTypes : List.of("card"));

        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount((long) (amountInCents * 100))
                .setCurrency("brl")
                .addAllPaymentMethodType(methodTypes)
                .setTransferData(
                        PaymentIntentCreateParams.TransferData.builder()
                                .setDestination(connectedAccountId)
                                .build()
                )
                .build();

        return PaymentIntent.create(params);
    }
}
