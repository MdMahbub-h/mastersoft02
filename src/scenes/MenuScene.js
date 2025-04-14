import { GameState } from "../GameState.js";
class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" });
  }

  create() {
    const { width, height } = this.scale;
    const gameState = new GameState();

    // this.add
    //   .text(width / 2, height / 2, "Wasteland Racer", {
    //     fontSize: "64px",
    //     color: "#000",
    //   })
    //   .setOrigin(0.5);

    this.background = this.add.sprite(this.scale.width / 2, this.scale.height / 2, "splashScreen");
    const scale = Math.min(this.scale.width / this.background.width, this.scale.height / this.background.height);
    this.background.setScale(scale);

    const startButton = this.add
      .text(width / 2, height / 2, "Start Game", {
        fontSize: "64px",
        color: "#fff",
        stroke: "2",
      })
      .setOrigin(0.5)
      .setInteractive({ cursor: "pointer" });

    startButton.on("pointerdown", () => {
      this.scene.stop();
      this.scene.launch("GameScene", { gameState });
    });

    // const rect = this.add
    //   .rectangle(width / 2, height / 2, 80, 450, 0x0f0000)
    //   .setAlpha(0.01)
    //   .setInteractive({ cursor: "pointer" });

    // rect.on("pointerdown", () => {
    //   this.scene.stop();
    //   this.scene.launch("GameScene", { gameState });
    // });
  }
}
export { MenuScene };
