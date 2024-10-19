import { makeAutoObservable } from "mobx";

class ToolState {
  private tool: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(value: string | null) {
    this.tool = value;
  }

  get selectedTool() {
    return this.tool;
  }
  
}

export default new ToolState();