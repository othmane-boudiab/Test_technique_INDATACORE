package com.indatacore.service;

import com.indatacore.model.Authorities;
import com.indatacore.repository.AuthoritiesRipository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AuthoritiesService {
    @Autowired
    private AuthoritiesRipository authoritiesRipository;

    @Transactional(readOnly = true)
    public List<Authorities> getAll(){
        return authoritiesRipository.findAll();
    }
}
