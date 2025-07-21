package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.CommentDto;
import com.amigoscode.jobstatus2.Comment;
import com.amigoscode.jobstatus2.CommentRepository;
import com.amigoscode.jobstatus2.ResourceNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository repository;
    private final ModelMapper mapper;

    public CommentServiceImpl(CommentRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public List<CommentDto> getAllComments() {
        return repository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(comment -> mapper.map(comment, CommentDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public CommentDto getCommentById(Long id) {
        Comment comment = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found"));
        return mapper.map(comment, CommentDto.class);
    }

    @Override
    public CommentDto createComment(CommentDto dto) {
        Comment comment = mapper.map(dto, Comment.class);
        Comment saved = repository.save(comment);
        return mapper.map(saved, CommentDto.class);
    }

    @Override
    public void deleteComment(Long id) {
        repository.deleteById(id);
    }
}