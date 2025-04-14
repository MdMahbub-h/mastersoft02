import { BaseScene } from "./BaseScene.js";
class GameUiScene extends BaseScene {
  mobileDevice = false;
  playerSystem = null;

  constructor() {
    super({ key: "GameUI", active: true });
  }

  preload() {
    ["upArrow", "downArrow", "leftArrow", "rightArrow"].forEach((asset) => {
      this.load.image(asset, `assets/${asset}.png`);
    });
  }

  create() {
    if (this.sys.game.device.os.android || this.sys.game.device.os.iOS) {
      console.log("Mobile device");
      this.mobileDevice = true;
      this.input.addPointer(2);
      if (this.scale.width < 1000 && this.scale.width < this.scale.height) {
        if (confirm("Please rotate your device and reload.")) {
          window.location.reload();
        }
      }
    } else {
      console.log("Desktop");
      this.mobileDevice = false;
    }

    if (this.mobileDevice) {
      this.controllerUi = this.add.container(0, this.scale.height);
      this.upArrow = this.add
        .sprite(this.scale.width - 20, -100, "upArrow")
        .setDepth(4)
        .setScale(0.18)
        .setOrigin(1, 1)
        .setVisible(false)
        .setInteractive({ useHandCursor: true });
      this.downArrow = this.add
        .sprite(this.scale.width - 20, -20, "downArrow")
        .setDepth(4)
        .setScale(0.18)
        .setOrigin(1, 1)
        .setVisible(false)
        .setInteractive({ useHandCursor: true });
      this.leftArrow = this.add.sprite(20, -20, "leftArrow").setDepth(4).setScale(0.18).setOrigin(0, 1).setVisible(false).setInteractive({ useHandCursor: true });
      this.rightArrow = this.add.sprite(100, -20, "rightArrow").setDepth(4).setScale(0.18).setOrigin(0, 1).setVisible(false).setInteractive({ useHandCursor: true });

      this.controllerUi.add([this.upArrow, this.downArrow, this.leftArrow, this.rightArrow]);
    }

    this.scale.on(
      Phaser.Scale.Events.RESIZE,
      (ev) => {
        if (this.mobileDevice) {
          this.upArrow?.setPosition(this.scale.width - 20, -100);
          this.downArrow?.setPosition(this.scale.width - 20, -20);
          this.leftArrow?.setPosition(20, -20);
          this.rightArrow?.setPosition(100, -20);
        }
      },
      this
    );
  }

  setPlayerController(playerSystem) {
    this.playerSystem = playerSystem;

    if (this.mobileDevice) {
      this.upArrow?.setVisible(true);
      this.downArrow?.setVisible(true);
      this.leftArrow?.setVisible(true);
      this.rightArrow?.setVisible(true);

      this.upArrow.on("pointerdown", () => {
        this.playerSystem.movementManager.upArrowIsDown = true;
        this.playerSystem.soundManager.upArrowIsDown = true;
        this.tweens.add({
          targets: this.upArrow,
          scale: 0.17,
          duration: 100,
          ease: "Power1",
        });
      });
      this.upArrow.on("pointerup", () => {
        this.playerSystem.movementManager.upArrowIsDown = false;
        this.playerSystem.soundManager.upArrowIsDown = false;
        this.tweens.add({
          targets: this.upArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.upArrow.on("pointerout", () => {
        this.playerSystem.movementManager.upArrowIsDown = false;
        this.playerSystem.soundManager.upArrowIsDown = false;
        this.tweens.add({
          targets: this.upArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.downArrow.on("pointerdown", () => {
        this.playerSystem.movementManager.downArrowIsDown = true;
        this.playerSystem.soundManager.downArrowIsDown = true;
        this.tweens.add({
          targets: this.downArrow,
          scale: 0.17,
          duration: 100,
          ease: "Power1",
        });
      });
      this.downArrow.on("pointerup", () => {
        this.playerSystem.movementManager.downArrowIsDown = false;
        this.playerSystem.soundManager.downArrowIsDown = false;
        this.tweens.add({
          targets: this.downArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.downArrow.on("pointerout", () => {
        this.playerSystem.movementManager.downArrowIsDown = false;
        this.playerSystem.soundManager.downArrowIsDown = false;
        this.tweens.add({
          targets: this.downArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.leftArrow.on("pointerdown", () => {
        this.playerSystem.movementManager.leftArrowIsDown = true;
        this.playerSystem.soundManager.leftArrowIsDown = true;
        this.tweens.add({
          targets: this.leftArrow,
          scale: 0.17,
          duration: 100,
          ease: "Power1",
        });
      });
      this.leftArrow.on("pointerup", () => {
        this.playerSystem.movementManager.leftArrowIsDown = false;
        this.playerSystem.soundManager.leftArrowIsDown = false;
        this.tweens.add({
          targets: this.leftArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.leftArrow.on("pointerout", () => {
        this.playerSystem.movementManager.leftArrowIsDown = false;
        this.playerSystem.soundManager.leftArrowIsDown = false;
        this.tweens.add({
          targets: this.leftArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.rightArrow.on("pointerdown", () => {
        this.playerSystem.movementManager.rightArrowIsDown = true;
        this.playerSystem.soundManager.rightArrowIsDown = true;
        this.tweens.add({
          targets: this.rightArrow,
          scale: 0.17,
          duration: 100,
          ease: "Power1",
        });
      });
      this.rightArrow.on("pointerup", () => {
        this.playerSystem.movementManager.rightArrowIsDown = false;
        this.playerSystem.soundManager.rightArrowIsDown = false;
        this.tweens.add({
          targets: this.rightArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
      this.rightArrow.on("pointerout", () => {
        this.playerSystem.movementManager.rightArrowIsDown = false;
        this.playerSystem.soundManager.rightArrowIsDown = false;
        this.tweens.add({
          targets: this.rightArrow,
          scale: 0.18,
          duration: 100,
          ease: "Power1",
        });
      });
    }
  }

  hidePlayerController() {
    if (this.mobileDevice) {
      this.upArrow?.setVisible(false);
      this.downArrow?.setVisible(false);
      this.leftArrow?.setVisible(false);
      this.rightArrow?.setVisible(false);
    }
  }
}
export { GameUiScene };
