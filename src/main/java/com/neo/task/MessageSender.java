package com.neo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 描述:
 * messageSender
 *
 * @author wujc
 * @create 2018-04-14 23:41
 */
@EnableScheduling //开启定时器功能
@Component
public class MessageSender {
    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Scheduled(fixedRate = 2000) //间隔2秒  通过StringRedisTemplate对象向redis消息队列chart频道发布消息
    public void sendMessage() {
        stringRedisTemplate.convertAndSend("chat", String.valueOf(Math.random()));
        stringRedisTemplate.convertAndSend("test","测试，卡卡卡");
    }
}
