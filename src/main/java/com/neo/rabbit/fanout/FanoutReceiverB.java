package com.neo.rabbit.fanout;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import java.lang.reflect.Member;

/**
 * 描述:
 * FanoutReceiverB
 *
 * @author wujc
 * @create 2018-04-14 10:47
 */
@Component
@RabbitListener(queues = "fanout.B")
public class FanoutReceiverB {
    @RabbitHandler
    public void proccess(String message){
        System.out.println("fanout Receiver B:" + message);

    }
}
