package com.neo.redis;

import org.springframework.stereotype.Component;

/**
 * 描述:
 * MessageReceiver
 *
 * @author wujc
 * @create 2018-04-14 23:46
 */
@Component
public class MessageReceiver {
    /**
     * 接收消息的方法
     */
    public void receiveMessage(String message) {
        System.out.println("收到一条消息：" + message);
    }

}
