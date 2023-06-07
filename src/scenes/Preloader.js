import Phaser  from "../lib/phaser.js";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    // this will load into the Texture Manager
    preload() {
        this.load.image('tiles','src/assets/tiles/tilemap.png');
        this.load.tilemapTiledJSON('dungeon-01','src/assets/dungeon-01.json');

        this.load.spritesheet('pig','src/assets/characters/pig.png', {frameWidth:16,frameHeight:16});
    }

    create() {
        this.scene.start('game');
    }
};