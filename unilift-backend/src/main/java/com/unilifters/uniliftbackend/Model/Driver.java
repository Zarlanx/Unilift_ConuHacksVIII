package com.unilifters.uniliftbackend.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Driver {
    @Id
    private String id;
    private String event;
    private String origin;

    public Driver(String event, String origin) {
        this.event = event;
        this.origin = origin;
    }
}
