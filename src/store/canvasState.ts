import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas: HTMLCanvasElement | null = null;

  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(value: HTMLCanvasElement | null) {
    this.canvas = value;
  }
}

export default new CanvasState();