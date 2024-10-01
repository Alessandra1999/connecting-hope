package com.hope.api_hope.dto;

import lombok.Data;

@Data
public class OngDTO {

    private int idNonProfit;

    private String nameNonprofit;

    private String emailNonprofit;

    private String photoNonprofit;

    private String addressNonprofit;

    private String passwordNonprofit;

    private String descriptionNonprofit;

    private String cnpjNonprofit;

    private ThemeNonprofit themeNonprofit;

    public enum ThemeNonprofit{
        LIGHT,
        DARK,
        CUSTOM
    }

}
