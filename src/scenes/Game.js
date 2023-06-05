import Phaser  from "../lib/phaser.js";
import {debugDraw} from "../utils/debug.js"

export default class Game extends Phaser.Scene {
    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors
    /** @type {Phaser.Physics.Arcade.Sprite} */
    faune

    constructor() {
        super('game');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create() {
        const map = this.make.tilemap({key:'dungeon-01'});
        const tileset = map.addTilesetImage('dungeon','tiles');
        map.createLayer('ground', tileset);
        const wallsLayer = map.createLayer('walls', tileset);

        map.setCollisionByProperty({collides: true});
        
        //debugDraw(wallsLayer,this);

        this.faune = this.physics.add.sprite(128,128,'faune','walk-down-3.png');

        this.anims.create({
            key: 'faune-idle-down',
            frames: [{ key: 'faune', frame: 'walk-down-3.png'}]
        });

        this.anims.create({
            key: 'faune-run-down',
            frames: this.anims.generateFrameNames('faune', {start: 1, end:8, prefix:'run-down-',suffix:'.png'}),
            repeat: -1,
            frameRate: 15
        });

        this.faune.anims.play('faune-run-down');

        this.physics.add.collider(this.faune,wallsLayer);

        this.cameras.main.startFollow(this.faune, true);
    }

    // t is total time, dt is time difference for frame
    update(t, dt) {
        if (!this.cursors || !this.faune) return;

        const speed = 100;
        if (this.cursors.down?.isDown) 
        {
            this.faune.anims.play('faune-run-down',true);
            this.faune.setVelocity(0,speed); 
        } 
        else if (this.cursors.up?.isDown) 
        {
            this.faune.setVelocity(0,-speed);
        } 
        else if (this.cursors.left?.isDown) 
        {
            this.faune.setFlipX(true);
            this.faune.setVelocity(-speed,0);
        } 
        else if (this.cursors.right?.isDown) 
        {
            this.faune.setFlipX(false);
            this.faune.setVelocity(speed,0);
        } 
        else
        {
            const parts = this.faune.anims.currentAnim.key.split('-');
            this.faune.anims.play('faune-idle-' + parts[2]);
            this.faune.setVelocity(0,0);
        }
    }
};