import { makeAutoObservable } from "mobx";

class ToolState {
  tool: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(value: string | null) {
    this.tool = value;
  }
}

export default new ToolState();