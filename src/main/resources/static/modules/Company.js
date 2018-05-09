layui.define(['form', 'table'], function (exports) {
    'use strict';
    var form = layui.form,
        table = layui.table;

    form.render(null, 'Company');

    table.render({
        elem: '#company_table'
        , height: 'full-190'
        , cols: [[{type:'numbers'}
            ,{ field: 'id', title: 'ID', width: 80, sort: true }
            , { field: 'username', title: '用户名' }
            , { field: 'email', title: '邮箱' }
            , { field: 'sign', title: '签名' }
            , { field: 'sex', title: '性别' }
            , { field: 'city', title: '城市' }
            , { field: 'experience', title: '积分', sort: true }]]
        , data: [{
            "id": "10001"
            , "username": "杜甫"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "116"
            , "ip": "192.168.0.8"
            , "logins": "108"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10002"
            , "username": "李白"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "12"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
            , "LAY_CHECKED": true
        }, {
            "id": "10003"
            , "username": "王勃"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "65"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10004"
            , "username": "贤心"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "666"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10005"
            , "username": "贤心"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "86"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10006"
            , "username": "贤心"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "12"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10007"
            , "username": "贤心"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "16"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }, {
            "id": "10008"
            , "username": "贤心"
            , "email": "xianxin@layui.com"
            , "sex": "男"
            , "city": "浙江杭州"
            , "sign": "人生恰似一场修行"
            , "experience": "106"
            , "ip": "192.168.0.8"
            , "logins": "106"
            , "joinTime": "2016-10-14"
        }]
        , skin: 'line'
        , even: true
        , page: {
            prev: '上一页',
            next: '下一页',
            layout: ['count', 'page', 'prev', 'next', 'skip'],
            theme: '#5AF'
        }
        , limits: [5, 7, 10]
        , limit: 5
    });
    exports('Company', null);
});