package com.unilifters.uniliftbackend.Service;

import com.unilifters.uniliftbackend.Interface.DriverRepository;
import com.unilifters.uniliftbackend.Model.Driver;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class DriverService {
    private final DriverRepository driverRepository;
    public List<Driver> getALlDrivers(){
        return driverRepository.findAll();
    }




}
