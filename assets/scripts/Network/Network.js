
var socket;

var Network = cc.Class({

    connect: function () {
        socket = io.connect('http://localhost:3000');
    },

    // 发送消息给服务器并接收
    send: function (type, sendData, callback) {
        if (cc.sys.isNative) {
            sendData = JSON.stringify(sendData);
        }
        socket.emit(type, sendData);
        // 由于目前 Native 不支持 once
        // 并且 on 是只执行一次的所以暂时先这样修改
        if (cc.sys.isNative) {
            socket.on(type, function (data) {
                if (cc.sys.isNative) {
                    data = JSON.parse(data);
                }
                callback(data || null);
            });
        }
        else {
            socket.once(type, function (data) {
                if (cc.sys.isNative) {
                    data = JSON.parse(data);
                }
                callback(data || null);
            });
        }
    },

    // 单纯接收服务器消息
    receive: function (type, callback) {
        // 由于目前 Native 不支持 once
        // 并且 on 是只执行一次的所以暂时先这样修改
        if (cc.sys.isNative) {
            socket.on(type, function (data) {
                if (cc.sys.isNative) {
                    data = JSON.parse(data);
                }
                callback(data || null);
            });
        }
        else {
            socket.once(type, function (data) {
                if (cc.sys.isNative) {
                    data = JSON.parse(data);
                }
                callback(data || null);
            });
        }
    }
});

window.Network = new Network();
window.Network.connect();
