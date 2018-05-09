package com.neo.rabbit;

import com.neo.rabbit.topic.TopicSender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 描述:
 * Topic 测试
 *
 * @author wujc
 * @create 2018-04-14 10:30
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class TopicTest {
    @Autowired
    private TopicSender sender;
    @Test
    public void topic() throws Exception{
        sender.send();
    }
    @Test
    public void topic1()throws Exception{
        sender.send1();
    }
    @Test
    public void topic2()throws Exception{
        sender.send2();
    }
}
