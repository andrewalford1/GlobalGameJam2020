const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

var config = {
    type: Phaser.AUTO,
    width: WIDTH,
    height:HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);


var player;
var collidable;
var cursors;
var bad;
var canDoubleJump = false;

let staticObjects = [
    new StaticObject({
        name: 'bg',
        path: 'assets/img/Background.png',
        x: WIDTH/2,
        y: HEIGHT/2,
        scaleX: 1,
        scaleY:1,
        isCollidable: false      
    }),
    new StaticObject({
        name: 'ground',
        path: 'assets/img/platform.png',
        x: 400,
        y: HEIGHT-30,
        scaleX: 10,
        scaleY:2, 
        isCollidable: true   
    }),
]


function preload ()
{
    for(let i = 0; i < staticObjects.length; i++) {
        this.load.image(
            staticObjects[i].GetName(),
            staticObjects[i].GetPath()
        );
    }

    this.load.spritesheet('urania', 'assets/img/Characters/Urania/UraniaSprites2.png', {frameWidth: 76, frameHeight: 87});
}

function create ()
{
    collidable = this.physics.add.staticGroup();
    for(let i = 0; i < staticObjects.length; i++) {
        if(staticObjects[i].GetCollidable()==true) {
            collidable.create(
            staticObjects[i].GetX(), 
            staticObjects[i].GetY(), 
            staticObjects[i].GetName()
        )
        .setScale(staticObjects[i].GetScaleX(), staticObjects[i].GetScaleY()).refreshBody();
        } else {
        this.add.image(
            staticObjects[i].GetX(), 
            staticObjects[i].GetY(), 
            staticObjects[i].GetName()
        )
        .setScale(staticObjects[i].GetScaleX(), staticObjects[i].GetScaleY());
        }

        
    }
    player = new Player(this);

    //keys
    cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on('keydown_UP', function(event) {
        player.Jump()
    });
    this.input.keyboard.on('keydown_DOWN', function(event) {
        player.Pound()
    });

    //collisions
    this.physics.add.collider(player.Get(), collidable);   
    //this.physics.add.collider(player, bad, playerHit, null, this);

    this.cameras.main.setBounds(0,0, 1000000000000000000000000000000, 600);
    this.cameras.main.startFollow(player.Get());
} 

function update ()
{
    player.Update(cursors);
}


    
// function playerHit(player, spike) {
//     player.setVelocity(0,0);
//     player.setX(50);
//     player.setY(300);
// }
