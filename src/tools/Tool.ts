export default class Tool {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;  

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!
    this.destroyEvents();
  }

  private destroyEvents() {
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
    this.canvas.onmousemove = null;
  }
}