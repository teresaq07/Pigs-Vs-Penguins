import Phaser from "../lib/phaser.js";
const debugDraw = (layer,scene) => {
    const debugGraphics = scene.add.graphics().setAlpha(0.7);
    layer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(240,240,40),
        faceColor: new Phaser.Display.Color(40,40,40,255)
    });
}; 

export {
    debugDraw
}