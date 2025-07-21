package com.amigoscode.jobstatus2;

import com.amigoscode.jobstatus2.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySenderOrReceiverOrderBySentAtDesc(String sender, String receiver);
}


