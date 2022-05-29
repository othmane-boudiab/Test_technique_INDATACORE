package com.indatacore.repository;

import com.indatacore.model.Authorities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthoritiesRipository extends JpaRepository<Authorities, Long> {
}
