package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.CommentDto;
import java.util.List;

public interface CommentService {
    List<CommentDto> getAllComments();
    CommentDto getCommentById(Long id);
    CommentDto createComment(CommentDto dto);
    void deleteComment(Long id);
}
