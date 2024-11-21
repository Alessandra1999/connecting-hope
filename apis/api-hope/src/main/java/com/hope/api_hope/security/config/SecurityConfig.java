package com.hope.api_hope.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity(
        prePostEnabled = true,
        securedEnabled = true,
        jsr250Enabled = true
)
public class SecurityConfig {
    public SecurityConfig() {
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
        // Desabilita CSRF e CORS (para desenvolvimento local)
        http.csrf(csrf -> csrf.disable()).cors(cors -> {});

        // Configura as permissões de acesso
        http.authorizeHttpRequests(auth -> {
            // Permite o acesso sem autenticação às rotas do Google OAuth2
            auth.requestMatchers("/**").permitAll();  //Gambiarra para fazer a apresentação

            // Requer autenticação para todas as outras requisições
            auth.anyRequest().authenticated();
        });

        // Configura o login via OAuth2 (Google)
        http.oauth2Login(oauth2Login -> {
            oauth2Login
                    .loginPage("http://localhost:5173/home")  //Gambiarra para fazer a apresentação
                    .defaultSuccessUrl("/auth/google/success", true)  // Redireciona para a página home após o login com sucesso
                    .failureUrl("/login?error=true"); // Redireciona após login com sucesso
        });

        return http.build();
    }

}
