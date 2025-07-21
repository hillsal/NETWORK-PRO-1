package com.amigoscode.jobstatus2;


import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user-data")
public class User_Data_Controller {

    private final User_Data_Service User_Data_Service;

    public User_Data_Controller(User_Data_Service user_Data_Service) {
        this.User_Data_Service = user_Data_Service;
    }

    @GetMapping
    public List<User_Data> getUser_Data(){
        return User_Data_Service.getAllUser_Data();
    }

    @PostMapping
    public void addNewUser(@RequestBody User_Data user_Data){
        User_Data_Service.insertUserData(user_Data);
    }
}
