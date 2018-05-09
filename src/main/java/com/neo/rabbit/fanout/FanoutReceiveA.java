package com.neo.rabbit.fanout;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * 描述:
 * FanoutReceiveA
 *
 * @author wujc
 * @create 2018-04-14 10:44
 */
@Component
@RabbitListener(queues = "fanout.A")
public class FanoutReceiveA {
    @RabbitHandler
    public void process(String message){
        System.out.println("fanout Receiver A :" + message);
    }
}
