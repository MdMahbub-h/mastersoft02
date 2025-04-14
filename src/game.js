import { GameScene } from "./scenes/GameScene.js";
import { PauseScene } from "./scenes/PauseScene.js";
import { LoadingScene } from "./scenes/LoadingScene.js";
import { GameOverScene } from "./scenes/GameOverScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { GameState } from "./GameState.js";
import { GameWinScene } from "./scenes/GameWinScene.js";
import { GameUiScene } from "./scenes/GameUiScene.js";

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth - 240,
    height: window.innerHeight,
  },
  backgroundColor: "#c0dffd",
  parent: "game-container",
  physics: { default: "arcade", arcade: { gravity: { y: 0 }, debug: false } },
  fps: { target: 60, forceSetTimeOut: true },
  scene: [LoadingScene, MenuScene, GameScene, PauseScene, GameOverScene, GameWinScene, GameUiScene],
};

const gameState = new GameState();

window.onload = () => {
  const game = new Phaser.Game(config);

  // window.addEventListener("resize", (ev) => {
  //   game.scale.resize(window.innerWidth, window.innerHeight);
  //   game.scale.setGameSize(window.innerWidth, window.innerHeight);
  //   game.scale.displaySize.setAspectRatio(window.innerWidth / window.innerHeight);
  //   game.scale.refresh();
  // });
};
