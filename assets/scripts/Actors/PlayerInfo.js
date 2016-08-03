
var PlayerInfo = cc.Class({
    properties: {
        userId: 9999999,
        hp: 1
    },
    set: function (info) {
        if (!info) {
            console.log("New PlayerInfo is null!");
            return;
        }
        this.userId = info.userId;
        this.hp = info.hp;
    }
});

window.PlayerInfo = new PlayerInfo();
