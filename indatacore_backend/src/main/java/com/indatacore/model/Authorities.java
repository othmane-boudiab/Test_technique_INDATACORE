package com.indatacore.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "authorities")
public class Authorities {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "role_name")
    private String roleName;
    @ManyToMany(mappedBy = "authorities")
    private List<User> users = new ArrayList<>();
}
