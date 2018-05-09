package com.neo.rabbit.topic;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * 描述:
 * TopicServer
 *
 * @author wujc
 * @create 2018-04-14 10:20
 */
@Component
@RabbitListener(queues = "topic.message")
public class TopicReceiver {
    @RabbitHandler
    public void process(String message){
        System.out.println("Topic Receiver1 :" + message);
    }
}
