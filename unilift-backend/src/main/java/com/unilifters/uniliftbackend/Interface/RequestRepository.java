package com.unilifters.uniliftbackend.Interface;

import com.unilifters.uniliftbackend.Model.Driver;
import com.unilifters.uniliftbackend.Model.Request;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface RequestRepository extends MongoRepository<Request, String>{
    @Query("{ 'active' : true }")
    List<Request> findActiveRequests();

}
