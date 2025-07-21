package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.CommentDto;
import com.amigoscode.jobstatus2.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService service;

    public CommentController(CommentService service) {
        this.service = service;
    }

    @GetMapping
    public List<CommentDto> getAllComments() {
        return service.getAllComments();
    }

    @PostMapping
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto dto) {
        return new ResponseEntity<>(service.createComment(dto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public CommentDto getComment(@PathVariable Long id) {
        return service.getCommentById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        service.deleteComment(id);
        return ResponseEntity.noContent().build();
    }
}
