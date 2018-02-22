// since mask is hidden in the scene (for editable),
// we use this script to show it at runtime
cc.Class({
    extends: cc.Component,
   
    start () {
        this.getComponent(cc.Sprite).enabled = true;
    },
});
