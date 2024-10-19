import { ToolsName } from "@config";
import Brush from "./Brush";
import DisableTool from "./DisableTool";
import Rect from "./Rect";
import Circle from "./Circle";
import Line from "./Line";
import Eraser from "./Eraser";

class ToolManager{
  private canvas!: HTMLCanvasElement;
  private strokeStyle: string = ''

  private enableBrushTool() {
    if (this.strokeStyle) {
      this.canvas.getContext('2d')!.strokeStyle = this.strokeStyle;
      this.strokeStyle = ''
    }
    
    return new Brush(this.canvas);
  }

  private enableRectTool() {
    if (this.strokeStyle) {
      this.canvas.getContext('2d')!.strokeStyle = this.strokeStyle;
      this.strokeStyle = ''
    }
    
    return new Rect(this.canvas);
  }

  private enableCircleTool() {
    if (this.strokeStyle) {
      this.canvas.getContext('2d')!.strokeStyle = this.strokeStyle;
      this.strokeStyle = ''
    }
    
    return new Circle(this.canvas);
  }

  private enableLineTool() {
    if (this.strokeStyle) {
      this.canvas.getContext('2d')!.strokeStyle = this.strokeStyle;
      this.strokeStyle = ''
    }
    
    return new Line(this.canvas);
  }

  private enableEraserTool() {
    this.strokeStyle = this.canvas.getContext('2d')?.strokeStyle as string;
    return new Eraser(this.canvas);
  }

  private disabledTools() {
    return new DisableTool(this.canvas);
  }

  run(canvas: HTMLCanvasElement, name: string | null) {
    this.canvas = canvas;

    switch(name) {
      case ToolsName.BRUSH:
        return this.enableBrushTool()
      case ToolsName.RECT:
        return this.enableRectTool();
      case ToolsName.CIRCLE:
        return this.enableCircleTool();
      case ToolsName.LINE:
        return this.enableLineTool();
      case ToolsName.ERASER:
        return this.enableEraserTool();
      default: 
        return this.disabledTools();
    }
  }
}

export default new ToolManager();