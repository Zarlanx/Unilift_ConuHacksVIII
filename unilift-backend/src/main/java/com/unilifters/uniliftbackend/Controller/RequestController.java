package com.unilifters.uniliftbackend.Controller;

import com.unilifters.uniliftbackend.Interface.DriverRepository;
import com.unilifters.uniliftbackend.Interface.RequestRepository;
import com.unilifters.uniliftbackend.Model.Driver;
import com.unilifters.uniliftbackend.Model.Request;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class RequestController {

    private RequestRepository requestRepository;

    //Get all requests
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/activeRequests")
    public List<Request> getActiveRequests(){
        return requestRepository.findAll();
    }

    //Get all active requests
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/activeRequestsQuery")
    public List<Request> getActiveRequestsQuery(){
        return requestRepository.findActiveRequests();
    }

    //Add a request
    @CrossOrigin(origins = "http://localhost:3000")

    @PutMapping("/api/addRequest")
    public void addRequest(@RequestBody Request request){
        requestRepository.save(request);
    }


}
