package com.hope.api_hope.security;

import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Value;

public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKey;

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }
}
