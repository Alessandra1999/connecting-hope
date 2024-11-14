package com.hope.api_hope.controller.request;

import lombok.Data;

@Data
public class EmailRequest {
    String email;
    String subject;
    String body;
}
