package com.neo.task;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 描述:
 * SchedulerTask
 *
 * @author wujc
 * @create 2018-04-14 11:27
 */
@Component
public class SchedulerTask {
    private int count=0;
    @Scheduled(cron = "*/6 * * * * ?")
    private void process(){
        System.out.println("this is scheduler task running " + (count++));
    }
}
