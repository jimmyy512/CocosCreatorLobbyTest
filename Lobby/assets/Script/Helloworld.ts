const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        this.label.node.on(cc.Node.EventType.TOUCH_START,()=>{
            cc.assetManager.loadBundle('http://192.168.1.102:8888/Game',
                // { version: '75f54' },
                function (err, bundle) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('load bundle successfully.',bundle);
                    bundle.loadScene('Game', function (err, scene) {
                        cc.director.runScene(scene);
                    });
                }
            );
        })
    }
}
