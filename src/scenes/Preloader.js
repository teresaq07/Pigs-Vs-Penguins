import Phaser  from "../lib/phaser.js";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('tiles','src/assets/tiles/tilemap.png');
        this.load.tilemapTiledJSON('dungeon-01','src/assets/dungeon-01.json');
    }

    create() {
        this.scene.start('game');
    }
};