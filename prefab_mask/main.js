var config = {
	type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        autoCenter: 1,
        width: 600,
        height: 800,
    },
	scene: [Game],
}

var game = new Phaser.Game(config);
