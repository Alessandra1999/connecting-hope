package com.hope.api_hope.service.utils;

import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class NowService {
    public LocalDate getDate() {return LocalDate.now();}
}
