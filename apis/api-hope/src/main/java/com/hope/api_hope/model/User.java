package com.hope.api_hope.model;

import com.hope.api_hope.dto.UserDTO;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUser;

    @Column(nullable = false)
    private String nameUser;

    @Column(nullable = false)
    private String photoUser;

    @Column(nullable = false)
    private String passwordUser;

    @Column(nullable = false)
    private String emailUser;

    @Column(nullable = false)
    private String addressUser;

    @Column(nullable = false)
    private UserDTO.ThemeUser themeUser;


}
