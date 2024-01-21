package com.unilifters.uniliftbackend.Interface;

import com.unilifters.uniliftbackend.Model.Driver;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DriverRepository extends MongoRepository<Driver, String> {
}


