package com.neo.rabbit.fanout;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 描述:
 * FanoutSender
 *
 * @author wujc
 * @create 2018-04-14 10:49
 */
@Component
public class FanoutSender {
    @Autowired
    private AmqpTemplate rabbitTemplate;
    public void send(){
        String context = "h1, fanout msg ";
        System.out.println("Sender :" + context);
        this.rabbitTemplate.convertAndSend("fanoutExchange", "", context);
    }
}
