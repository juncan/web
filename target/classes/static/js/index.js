layui.define(['layer','form','test'],function(exports){
    'use strict';
    var layer = layui.layer,
        form = layui.form,
        test = layui.test;

    layer.msg('Hello World');
    test.init();
    exports('index',{});
});