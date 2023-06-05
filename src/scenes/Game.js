import Phaser  from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    preload() {

    }

    create() {
        const map = this.make.tilemap({key:'dungeon-01'});
        const tileset = map.addTilesetImage('dungeon','tiles');

        map.createLayer('ground', tileset);
        map.createLayer('walls', tileset);
    }
};