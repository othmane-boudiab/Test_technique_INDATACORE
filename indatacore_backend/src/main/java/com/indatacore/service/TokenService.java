package com.indatacore.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.indatacore.dto.JwtLogin;
import com.indatacore.dto.JwtPropreties;
import com.indatacore.dto.LoginResponse;
import com.indatacore.dto.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class TokenService {

    private AuthenticationManager authenticationManager;

    @Autowired
    public TokenService(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    private String generateToken(Authentication authentication){
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        // Creat JWT Token
        String token = JWT.create()
                .withSubject(userPrincipal.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtPropreties.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(JwtPropreties.SECRET.getBytes()));
                return token;
    }

    public LoginResponse login(JwtLogin jwtLogin){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtLogin.getEmail(),jwtLogin.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String token = generateToken(authenticate);
        return new LoginResponse(jwtLogin.getName(), jwtLogin.getEmail(), token);
    }
}
