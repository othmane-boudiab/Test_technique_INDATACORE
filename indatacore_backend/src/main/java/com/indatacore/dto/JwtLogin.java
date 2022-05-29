package com.indatacore.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtLogin {
    private String name;
    private String email;
    private String password;
}
