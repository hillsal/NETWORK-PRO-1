package com.amigoscode.jobstatus2;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class User_Data_Service {

    private final User_Data_Repo user_Data_Repo;

    public User_Data_Service(User_Data_Repo user_Data_Repo) {
        this.user_Data_Repo = user_Data_Repo;
    }

    public List<User_Data> getAllUser_Data(){
        return this.user_Data_Repo.findAll();
    }

    public void insertUserData(User_Data User_Data){
        user_Data_Repo.save(User_Data);
    }
}
