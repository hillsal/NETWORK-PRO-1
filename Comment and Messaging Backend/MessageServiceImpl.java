package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.MessageDto;
import com.amigoscode.jobstatus2.Message;
import com.amigoscode.jobstatus2.MessageRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService {

    private final MessageRepository repository;
    private final ModelMapper mapper;

    public MessageServiceImpl(MessageRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public MessageDto sendMessage(MessageDto dto) {
        Message message = mapper.map(dto, Message.class);
        Message saved = repository.save(message);
        return mapper.map(saved, MessageDto.class);
    }

    @Override
    public List<MessageDto> getConversation(String username) {
        return repository.findBySenderOrReceiverOrderBySentAtDesc(username, username)
                .stream()
                .map(message -> mapper.map(message, MessageDto.class))
                .collect(Collectors.toList());
    }
}
