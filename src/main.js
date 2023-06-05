import Phaser from "./lib/phaser.js"
import Preloader from "./scenes/Preloader.js";
import Game from "./scenes/Game.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 400,
    height: 320,
    physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
            debug: true
		}
	},
    scene: [Preloader,Game],
    scale: {zoom: 2}
});