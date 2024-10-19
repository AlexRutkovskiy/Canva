import Tool from "./Tool";

export default class Line extends Tool {
  
  private mouseDown: boolean = false;
  private startX!: number;
  private startY!: number;
  private save!: string;
  
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
    this.save = '';
  }

  private mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;

    this.startX = e.offsetX;
    this.startY = e.offsetY;

    this.ctx.beginPath()
    this.ctx.moveTo(this.startX, this.startY)
    this.save = this.canvas.toDataURL()
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) return;

    this.draw(e.offsetX,e.offsetY);
  }

  protected draw(x: number, y: number) {
    const img = new Image();
    img.src = this.save;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY)
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }
}