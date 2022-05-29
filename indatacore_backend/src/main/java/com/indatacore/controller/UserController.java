package com.indatacore.controller;

import com.indatacore.dto.JwtLogin;
import com.indatacore.dto.LoginResponse;
import com.indatacore.model.User;
import com.indatacore.service.AuthoritiesService;
import com.indatacore.service.TokenService;
import com.indatacore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping
public class UserController {
    private TokenService tokenService;
    private UserService userService;
    private AuthoritiesService authoritiesService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(TokenService tokenService, UserService userService, AuthoritiesService authoritiesService, PasswordEncoder passwordEncoder) {
        this.tokenService = tokenService;
        this.userService = userService;
        this.authoritiesService = authoritiesService;
        this.passwordEncoder = passwordEncoder;
    }


    @PostMapping("/signin")
    public LoginResponse login(@RequestBody JwtLogin jwtLogin){
        return tokenService.login(jwtLogin);
    }

    @PostMapping("/signup")
    public void register(@RequestBody JwtLogin jwtLogin){
        User user = new User();
        user.setName(jwtLogin.getName());
        user.setEmail(jwtLogin.getEmail());
        user.setPassword(passwordEncoder.encode(jwtLogin.getPassword()));
        user.setActive(1);
        user.getAuthorities().add(authoritiesService.getAll().get(0));
        userService.addUser(user);
    }

}
