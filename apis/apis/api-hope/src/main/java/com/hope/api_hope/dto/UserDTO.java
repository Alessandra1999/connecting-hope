package com.hope.api_hope.dto;

import lombok.Data;

@Data
public class UserDTO {

    private int idUser;

    private String nameUser;

    private String emailUser;

    private String photoUser;

    private String passwordUser;

    private String addressUser;

    private ThemeUser themeUser;

    public enum ThemeUser{
        LIGHT,
        DARK,
        CUSTOM
    }
}
