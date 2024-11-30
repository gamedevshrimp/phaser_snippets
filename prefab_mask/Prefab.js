class Prefab extends Phaser.GameObjects.Container {
    constructor(scene, x, y, spriteName, maskName) {
        super(scene, x, y);

        // add to the scene
        scene.add.existing(this);

        // add a logo sprite, attach to the scene
        this.logoSprite = scene.add.sprite(0, 0, spriteName);
        this.add(this.logoSprite);

        // add a mask, set mask as invisible
        this.maskSprite = scene.add.sprite(this.x, this.y, maskName);
        this.maskSprite.setVisible(false);

        // set the maskSprite as a mask to the logoSprite
        this.mask = this.maskSprite.createBitmapMask();
        this.logoSprite.setMask(this.mask);
    }

    // update the mask transform by postion of the prefab
    updateMaskTransform() {
        this.maskSprite.setPosition(this.x, this.y);
        this.maskSprite.setScale(this.scaleX, this.scaleY);
        this.maskSprite.setRotation(this.rotation);
    }
}