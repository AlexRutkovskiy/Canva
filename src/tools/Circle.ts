import Tool from "./Tool";

export default class Circle extends Tool {
  
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

    this.ctx.beginPath();
    this.startX = e.offsetX;
    this.startY = e.offsetY;
    this.save = this.canvas.toDataURL()
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (!this.mouseDown) return;

    const r = Math.sqrt((e.offsetX - this.startX)**2 + (e.offsetY - this.startY)**2);

    this.draw(
      this.startX, 
      this.startY,
      r
    );
  }

  protected draw(x: number, y: number, r: number) {
    const img = new Image();
    img.src = this.save;
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}