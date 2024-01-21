package com.unilifters.uniliftbackend.Controller;
import java.util.List;


import com.unilifters.uniliftbackend.Interface.DriverRepository;
import com.unilifters.uniliftbackend.Model.Driver;
import com.unilifters.uniliftbackend.Service.DriverService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
public class DriverController {
    private DriverRepository driverRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/post")
    public void addDriver(@RequestBody Driver driver){
        driverRepository.save(driver);
    }



}
