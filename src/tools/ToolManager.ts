import { ToolsName } from "@config";
import Brush from "./Brush";
import DisableTool from "./DisableTool";
import Rect from "./Rect";

class ToolManager{
  private canvas!: HTMLCanvasElement;

  private enableBrushTool() {
    return new Brush(this.canvas);
  }

  private enableRectTool() {
    return new Rect(this.canvas);
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
      default: 
        this.disabledTools();
    }
  }
}

export default new ToolManager();