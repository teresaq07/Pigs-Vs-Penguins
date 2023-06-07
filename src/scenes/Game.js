import Phaser  from "../lib/phaser.js";
import {debugDraw} from "../utils/debug.js"

export default class Game extends Phaser.Scene {
    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors
    /** @type {Phaser.Physics.Arcade.Sprite} */
    pig
    /** @type {string[]} */
    keys

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
        
        debugDraw(wallsLayer,this);

        this.pig = this.physics.add.sprite(128,128,'pig');

        const frameRatePig = 8;

        this.anims.create({
            key: 'pig-idle-down',
            frames: this.anims.generateFrameNumbers('pig',{frames: [0]})
        });

        this.anims.create({
            key: 'pig-run-down',
            frames: this.anims.generateFrameNumbers('pig',{frames: [4,5,6,7]}),
            frameRate:frameRatePig,
            repeat:-1
        });

        this.anims.create({
            key: 'pig-run-up',
            frames: this.anims.generateFrameNumbers('pig',{frames: [8,9,10,11]}),
            frameRate:frameRatePig,
            repeat:-1
        });

        this.anims.create({
            key: 'pig-run-right',
            frames: this.anims.generateFrameNumbers('pig',{frames: [12,13,14,15]}),
            frameRate:frameRatePig,
            repeat:-1
        });

        this.anims.create({
            key: 'pig-run-left',
            frames: this.anims.generateFrameNumbers('pig',{frames: [16,17,18,19]}),
            frameRate:frameRatePig,
            repeat:-1
        });

        this.anims.create({
            key: 'pig-idle-up',
            frames: this.anims.generateFrameNumbers('pig',{frames: [20]})
        });

        this.anims.create({
            key: 'pig-idle-right',
            frames: this.anims.generateFrameNumbers('pig',{frames: [24]})
        });

        this.anims.create({
            key: 'pig-idle-left',
            frames: this.anims.generateFrameNumbers('pig',{frames: [16]})
        });

        this.pig.anims.play('pig-idle-down');
        this.physics.add.collider(this.pig,wallsLayer);
        this.cameras.main.startFollow(this.pig, true);
        this.pig.setScale(2);
    }

    // t is total time, dt is time difference for frame
    update(t, dt) {
        if (!this.cursors || !this.pig) return;

        const speed = 100;
        if (this.cursors.down?.isDown) 
        {
            this.pig.anims.play('pig-run-down',true);
            this.pig.setVelocity(0,speed); 
        } 
        else if (this.cursors.up?.isDown) 
        {
            this.pig.anims.play('pig-run-up',true);
            this.pig.setVelocity(0,-speed);
        } 
        else if (this.cursors.left?.isDown) 
        {
            this.pig.anims.play('pig-run-left',true);
            this.pig.setVelocity(-speed,0);
        } 
        else if (this.cursors.right?.isDown) 
        {
            this.pig.anims.play('pig-run-right',true);
            this.pig.setVelocity(speed,0);
        } 
        else
        {
            const parts = this.pig.anims.currentAnim.key.split('-');
            this.pig.anims.play('pig-idle-' + parts[2]);
            this.pig.setVelocity(0,0);
        }
    }
};