var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// 初始 PlayreInfoJson 模板 Url
var basePlayreInfoJsonUrl = './templePlayerInfo.json';
// 存储 playerInfo 目录 Url
var prefixUrl = './playerInfoList/';

// 测试使用 get 到时候可以替换成 post
// 这里是 anysdk 支付完毕以后的回调函数
app.get('/PayNotice', function(req, res) {
    // 通过 user id 去获取存储在 playerInfoList 文件下的玩家数据如果没有会进行创建
    var userId = "00000001";
    var url = prefixUrl + userId + ".json";
    var json = getPlayerInfoJson(url);
    var info = JSON.parse(json);

    // 这里是支付完以后所需要修改的 hp 数值
    info.hp = 3;

    // 存储玩家数据
    savePlayerInfoJson(url, info);
    console.log('PayNotice');
    // 发送玩家数据给客户端
    io.sockets.emit('PayNotice', {playerInfo: info});
});

// 下面应该你不需要看，这个是服务器与客户端交互的代码。
io.sockets.on('connection', function (socket) {
    // 接收玩家登录消息，并且返回玩家数据
    socket.on('Login', function (data) {
        console.log('Login....');
        var obj = getClientData(data);
        var userId = obj.userId;
        var url = prefixUrl + userId + ".json";
        var json = getPlayerInfoJson(url);
        var info = JSON.parse(json);
        info.userId = userId;
        if (info.hp <= 0) {
            info.hp = 1;
        }
        savePlayerInfoJson(url, info);
        socket.emit('Login', {playerInfo: info});
    });

    // 接收玩家受伤消息，并且返回玩家数据
    socket.on('Hurt', function (data) {
        console.log('Hurt....');
        var obj = getClientData(data);
        var url = prefixUrl + obj.userId + ".json";
        var json = getPlayerInfoJson(url);
        var info = JSON.parse(json);
        info.hp = obj.hp;
        savePlayerInfoJson(url, info);
        socket.emit('Hurt', {playerInfo: info});
    });

    // 接收重新开始消息，并且返回玩家数据
    socket.on('Restart', function (data) {
        console.log(data);
        var obj = getClientData(data);
        var url = prefixUrl + obj.userId + ".json";
        var json = getPlayerInfoJson(url);
        var info = JSON.parse(json);
        if (info.hp <= 0) {
            info.hp = 1;
        }
        savePlayerInfoJson(url, info);
        socket.emit('Restart', {playerInfo: info});
    });
});

// 开启服务器端口为 3000
server.listen(3000, function(){
    console.log('Server Begin...');
});

//下方是一些帮助函数

var getClientData = function (data) {
    return data instanceof Object ? data : JSON.parse(data);
};

var getPlayerInfoJson = function (url) {
    var json = '';
    try {
        json = fs.readFileSync(url);
    }
    catch (e) {
        json = fs.readFileSync(basePlayreInfoJsonUrl);
        fs.writeFileSync(url, json);
    }
    return json;
};

var savePlayerInfoJson = function (url, info) {
    var json = JSON.stringify(info);
    fs.writeFileSync(url, json);
};