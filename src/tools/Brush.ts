import Tool from "./Tool";

export default class Brush extends Tool {
  private mouseDown: boolean = false;
  
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen();
  }

  private listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  private mouseUpHandler() {
    this.mouseDown = false;
  }

  private mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;

    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) return;

    this.draw(e.offsetX, e.offsetY);
  }

  protected draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}