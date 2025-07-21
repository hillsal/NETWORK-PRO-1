package com.amigoscode.jobstatus2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class JobStatus2Application {

    public static void main(String[] args) {
        SpringApplication.run(JobStatus2Application.class, args);
    }


    @GetMapping
    public String helloWorld() {
        return "HELLOOO";
    }
}
