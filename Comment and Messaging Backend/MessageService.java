package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.MessageDto;
import java.util.List;

public interface MessageService {
    MessageDto sendMessage(MessageDto dto);
    List<MessageDto> getConversation(String username);
}