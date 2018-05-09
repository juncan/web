package com.neo.rabbit;

import com.neo.domain.User;
import com.neo.rabbit.object.ObjectSender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 描述:
 * ObjectTest
 *
 * @author wujc
 * @create 2018-04-14 11:07
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ObjectTest {
    @Autowired
    private ObjectSender sender;

    @Test
    public void senderObject() throws Exception{
        User user = new User();
        user.setUserName("neo");
        user.setPassWord("123456");
        sender.send(user);
    }
}
