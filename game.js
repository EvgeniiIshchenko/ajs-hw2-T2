export default class Game {
  start() {
    console.log("game started");
  }
}

import Character from "./domain.js";

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
