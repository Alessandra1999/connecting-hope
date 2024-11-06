package com.hope.api_hope.security.domain;

import com.hope.api_hope.model.User;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Permits {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
