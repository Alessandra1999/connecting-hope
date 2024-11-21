package com.hope.api_hope.security.controller;

import com.hope.api_hope.security.config.OAuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/google")
@CrossOrigin(origins = "http://localhost:5173")
public class OAuthController {

    private final OAuthService oAuthService;

    public OAuthController(OAuthService oAuthService) {
        this.oAuthService = oAuthService;
    }

    @PostMapping("/auth/google/callback")
    public String handleOAuthCallback(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            throw new RuntimeException("Erro ao obter usuário autenticado.");
        }

        // Verificar as informações do principal
        System.out.println("Usuário autenticado: " + principal.getName());

        // Obtendo o token de acesso
        String accessToken = oAuthService.getAccessToken(principal.getName());

        // Redirecionar para a página de sucesso após login
        return "redirect:/home";  // Redireciona para a página inicial
    }

    @GetMapping("/success")
    public ResponseEntity<String> loginSuccess(@AuthenticationPrincipal OidcUser user) {
        // Retorne informações do usuário ou gere um token JWT
        return ResponseEntity.ok("Login bem-sucedido! Bem-vindo, " + user.getFullName());
    }
}
