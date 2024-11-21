package com.hope.api_hope.security.config;

import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class OAuthService {

    private final OAuth2AuthorizedClientService authorizedClientService;

    public OAuthService(OAuth2AuthorizedClientService authorizedClientService) {
        this.authorizedClientService = authorizedClientService;
    }

    public String getAccessToken(String principalName) {
        try {
            OAuth2AuthorizedClient client = authorizedClientService.loadAuthorizedClient("google", principalName);
            OAuth2AccessToken accessToken = client.getAccessToken();
            return accessToken.getTokenValue();
        } catch (OAuth2AuthenticationException e) {
            throw new RuntimeException("Erro ao obter o token de acesso do Google", e);
        }
    }
}
