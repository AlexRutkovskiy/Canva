import Tool from "@tools/Tool";
import { makeAutoObservable } from "mobx";

class ToolState {
  private tool: string | null = null;
  instanceTool!: Tool;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(value: string | null) {
    this.tool = value;
  }

  get selectedTool() {
    return this.tool;
  }
  
  setInstanceTool(data: Tool) {
    this.instanceTool = data;
  }

  setFillColor(color: string) {
    this.instanceTool.ctx.fillStyle = color;
  }

  setBorderColor(color: string) {
    this.instanceTool.ctx.strokeStyle = color;
  }

  setWidth(width: number) {
    this.instanceTool.ctx.lineWidth = width
  }
}

export default new ToolState();