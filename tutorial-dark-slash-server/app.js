var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var crypto = require('crypto');
var querystring = require('querystring');

app.use(bodyParser.json()); // for parsing application/json
//parse application/x-www-form-urlencoded  
app.use(bodyParser.urlencoded({
    type: function (req) {
        return /x-www-form-urlencoded/.test(req.headers['content-type']);
    },
    extended: false
}));

// 初始 PlayreInfoJson 模板 Url
var basePlayreInfoJsonUrl = './templePlayerInfo.json';
// 存储 playerInfo 目录 Url
var prefixUrl = './playerInfoList/';

//anysdk privatekey
var privateKey = 'E79D311B958876683851CD117D3B44B8';
//anysdk enhancedKey
var enhancedKey = 'N2QyMTQyZmUzMjNjN2Q4Yzk2MWQ';

//anysdk login oauth host
var oauthHost = 'oauth.anysdk.com';
// anysdk login oauth path
var oauthPath = '/api/User/LoginOauth/';

app.post('/Login', function (req, res) {
    console.log('########## Login ##########:\n' + JSON.stringify(req.body));
    var params = req.body;
    params.private_key = privateKey;//for h5
    var postData = querystring.stringify(params);
    var options = {
        host: oauthHost,
        path: oauthPath,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length': postData.length
        }
    };

    console.log('########## POST URL ##########:\n' + oauthHost + oauthPath);
    console.log('########## POST DATA ##########:\n' + postData);

    var reqToAnysdk = http.request(options, function (resFromAnysdk) {
        resFromAnysdk.setEncoding('utf8');
        resFromAnysdk.on('data', function (data) {
            console.log('########## RETURN DATA ##########:\n' + data);
            var resJson = JSON.parse(data);
            if (resJson && (resJson.status == "ok")) {
                resJson.ext = "success";
                res.write(JSON.stringify(resJson));
            } else {
                res.write(JSON.stringify(resJson));
            }
            res.end();
        });

    });
    reqToAnysdk.write(postData);
    reqToAnysdk.end();
});

// 这里是 anysdk 支付完毕以后的回调函数
app.post('/PayNotice', function (req, res) {
    console.log('########## PAYNOTICE ##########:\n' + JSON.stringify(req.body));
    var post = req.body;
    if (checkSign(post, privateKey) && checkEnhancedSign(post, enhancedKey)) {
        //if(checkEnhancedSign(post,enhancedKey)){
        //异步处理游戏支付发放道具逻辑
        res.end('ok');
        // 通过 user id 去获取存储在 playerInfoList 文件下的玩家数据如果没有会进行创建
        var userId = post['user_id'];
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
    } else {
        res.end('error');
    }

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
        savePlayerInfoJson(url, info);
        socket.emit('Restart', {playerInfo: info});
    });
});

// 开启服务器端口为 3000
server.listen(3000, function () {
    console.log('Server Begin...');
});

//md5
var getMD5 = function (data) {
    //中文字符处理
    data = new Buffer(data).toString("binary");
    return crypto.createHash('md5').update(data).digest('hex').toLowerCase();
};

//通用验签
var checkSign = function (post, privateKey) {
    var sourceSign = post.sign;
    delete post.sign;
    var newSign = getSign(post, privateKey);

    if (sourceSign == newSign) {
        return true;
    }
    return false;
};

//增强验签
var checkEnhancedSign = function (post, enhancedKey) {
    var sourceEnhancedSign = post.enhanced_sign;
    delete post.enhanced_sign;
    delete post.sign;
    var newSign = getSign(post, enhancedKey);
    if (sourceEnhancedSign == newSign) {
        return true;
    }
    return false;
};

//获取签名
var getSign = function (post, signKey) {
    var keys = [];
    for (var key in post) {
        console.log('########## KEY: ' + key + '\t########## VAULE: ' + post[key]);
        keys.push(key);
    }  
    keys = keys.sort();

    var paramString = '';
    for (var i in keys) {
        paramString += post[keys[i]];
    }

    console.log('########## STR CAT ##########:\n' + paramString);
    console.log('########## FIRST MD5 ##########:\n' + getMD5(paramString));
    console.log('########## ADD SIGN KEY ##########:\n' + getMD5(paramString) + signKey);
    console.log('########## SECOND M5D ##########:\n' + getMD5(getMD5(paramString) + signKey));

    return getMD5(getMD5(paramString) + signKey);
};

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