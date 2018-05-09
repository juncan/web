; !(function () {
    
    var ajax = {
        get: function (url, callback) {
            var obj = new XMLHttpRequest();
            obj.open('GET', url, true);
            obj.onreadystatechange = function () {
                if (obj.readyState === 4 && (obj.status === 200 || obj.status === 304)) { // 304未修改
                    if (typeof callback === 'function') callback.call(this, obj.responseText);
                }
            };
            obj.send();
        },
        post: function (url, data, callback) {
            var obj = new XMLHttpRequest();
            obj.open("POST", url, true);
            obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
            obj.onreadystatechange = function() {
                if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
                    if (typeof callback === 'function') callback.call(this, obj.responseText);
                }
            };
            obj.send(data);
        }
    };

    window['util'] = {
        ajax: ajax
    };
}());