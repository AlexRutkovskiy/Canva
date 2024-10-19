import { ToolsName } from "@config";
import Brush from "./Brush";
import DisableTool from "./DisableTool";

class ToolManager{
  private canvas!: HTMLCanvasElement;

  private enableBrushTool() {
    return new Brush(this.canvas);
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
      default: 
        this.disabledTools();
    }
  }
}

export default new ToolManager();