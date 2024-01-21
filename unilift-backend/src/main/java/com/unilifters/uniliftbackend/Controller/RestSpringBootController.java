package com.unilifters.uniliftbackend.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class RestSpringBootController {

    @GetMapping("/event/titles")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<String> getEvent() {
        // Create a RestTemplate instance
        RestTemplate template = new RestTemplate();

        // Define the URL for the external API
        String apiKey = "e053e28a793ff971598da3390e3451b60fd04269ae16afa3adece537f61b5f62";
        String apiUrl = "https://serpapi.com/search.json?engine=google_events&q=Events+in+Montreal&hl=en&gl=ca&api_key=" + apiKey;

        // Make a GET request and receive a Map response
        Map<String, Object> response  = template.getForObject(apiUrl, Map.class);

        // Extract the events_results array from the response
        List<Map<String, Object>> eventsResults = (List<Map<String, Object>>) response.get("events_results");

        // Process the response to extract only the title field from each event
        List<String> titles = new ArrayList<>();
        for (Map<String, Object> event : eventsResults) {
            titles.add((String) event.get("title"));
        }

        return titles;
    }
}
