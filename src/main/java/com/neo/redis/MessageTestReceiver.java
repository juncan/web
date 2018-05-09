package com.neo.redis;

import org.springframework.stereotype.Component;

/**
 * 描述:
 *
 * @author wujc
 * @create 2018-04-15 9:59
 */
@Component
public class MessageTestReceiver {
    public void receiveTestMessage(String message){
        System.out.println("收到一条Test消息：" + message);
    }

}
