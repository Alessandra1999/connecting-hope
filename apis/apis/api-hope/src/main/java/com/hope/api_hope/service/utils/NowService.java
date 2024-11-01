package com.hope.api_hope.service.utils;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;

@Service
public class NowService {
    public Date getDate() {return LocalDate.now();}
}
