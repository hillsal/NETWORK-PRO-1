package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.MessageDto;
import com.amigoscode.jobstatus2.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<MessageDto> sendMessage(@RequestBody MessageDto dto) {
        return new ResponseEntity<>(service.sendMessage(dto), HttpStatus.CREATED);
    }

    @GetMapping("/user/{username}")
    public List<MessageDto> getMessages(@PathVariable String username) {
        return service.getConversation(username);
    }
}