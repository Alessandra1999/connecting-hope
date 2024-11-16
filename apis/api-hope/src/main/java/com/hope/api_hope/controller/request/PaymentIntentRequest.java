package com.hope.api_hope.controller.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class PaymentIntentRequest {

    private long amountInCents;
    private String connectedAccountId;
    private List<String> paymentMethodTypes;
}
