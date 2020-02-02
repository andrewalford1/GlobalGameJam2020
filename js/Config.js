let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height:window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

export default config;