package com.neo.rabbit;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * 描述:
 * rabbit
 *
 * @author wujc
 * @create 2018-04-14 9:52
 */
@Configuration
public class RabbitConfig {
    @Bean
    public Queue hellQueue(){
        return new Queue("hello");
    }

    @Bean
    public Queue neoQueue(){
        return new Queue("neo");

    }
    @Bean
    public Queue objectQueue(){
        return new Queue("object");
    }
}
