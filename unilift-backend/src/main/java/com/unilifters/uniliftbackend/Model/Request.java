package com.unilifters.uniliftbackend.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.ZonedDateTime;

@Data
@Document
public class Request {
    @Id
    private String id;
    private String event;
    private String origin;
    private String destination;
    private boolean active;
    private int size;
    private String name;
    private LocalDate createdAt;
}
