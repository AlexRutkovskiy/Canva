import { ToolsName } from "@config";
import Brush from "./Brush";
import DisableTool from "./DisableTool";
import Rect from "./Rect";
import Circle from "./Circle";
import Line from "./Line";
import Eraser from "./Eraser";

class ToolManager{
  private canvas!: HTMLCanvasElement;

  private enableBrushTool() {
    return new Brush(this.canvas);
  }

  private enableRectTool() {
    return new Rect(this.canvas);
  }

  private enableCircleTool() {
    return new Circle(this.canvas);
  }

  private enableLineTool() {
    return new Line(this.canvas);
  }

  private enableEraserTool() {
    return new Eraser(this.canvas);
  }

  private disabledTools() {
    return new DisableTool(this.canvas);
  }

  run(canvas: HTMLCanvasElement, name: string | null) {
    this.canvas = canvas;

    switch(name) {
      case ToolsName.BRUSH:
        this.enableBrushTool()
        break;
      case ToolsName.RECT:
        this.enableRectTool();
        break;
      case ToolsName.CIRCLE:
        this.enableCircleTool();
        break
      case ToolsName.LINE:
        this.enableLineTool();
        break;  
      case ToolsName.ERASER:
        this.enableEraserTool();
        break;
      default: 
        this.disabledTools();
    }
  }
}

export default new ToolManager();