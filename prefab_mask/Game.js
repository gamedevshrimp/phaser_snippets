class Game extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	preload(){
		this.logo = this.load.image('logo', './img/logo.png')
		this.mask = this.load.image('logo_mask', './img/logo_mask.png')
	}

	create() {
		const prefab1 = new Prefab(this, 300, 250, 'logo', 'logo_mask');
		this.scalePrefabWithMask(prefab1);
		this.rotatePrefabwithMask(prefab1);
		
		const prefab2 = new Prefab(this, 200, 600, 'logo', 'logo_mask');
		this.scalePrefabWithMask(prefab2);
		this.movePrefabwithMask(prefab2);
	}

	rotatePrefabwithMask(prefab) {
		this.tweens.add({
			targets: prefab,
			angle: 360,
			duration: 2000,
			onUpdate: () => prefab.updateMaskTransform(),
			repeat: -1,
		});
	}

	scalePrefabWithMask(prefab) {
		prefab.setScale(0.5);
		prefab.updateMaskTransform();
	}

	movePrefabwithMask(prefab) {
		this.tweens.add({
			targets: prefab,
			x: 400,
			duration: 2000,
			onUpdate: () => prefab.updateMaskTransform(),
			yoyo: true,
			repeat: -1,
		});
	}	
}
