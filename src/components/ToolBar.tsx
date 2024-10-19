import {useCallback, type FC} from "react";
import { observer } from "mobx-react-lite"
import clsx from "clsx";
import "@styles/bar.scss";

import { Config, ToolsName } from "@config"
import Brush from "@tools/Brush";
import DisableTool from "@tools/DisableTool";
import canvasState from "@store/canvasState";
import toolState from "@store/toolState";


const mainClass = "bar";
const buttons = Config.toolbar.buttons;

const ToolBar: FC = observer(() => {
  
  const manageTools = (tool: string | null) => {
    switch(tool) {
      case ToolsName.BRUSH:
        toolState.setTool(ToolsName.BRUSH);
        new Brush(canvasState.canvas!)
        break;
      default: 
        toolState.setTool(null);
        new DisableTool(canvasState.canvas!);
        return;
    }
  }

  const handleLeftBtnClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const isActive = e.currentTarget.classList.contains('active');
    const name = !isActive ? e.currentTarget.getAttribute('name') : null;
    
    manageTools(name)
  }, [])
  

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__wrapper`}>
        <div className={`${mainClass}__col-left`}>
          {buttons.left.map(btn => {
            return (
              <button 
                key={btn.id}
                name={btn.id}
                className={clsx(
                  `${mainClass}__btn ${btn.id}`, 
                  btn.id === toolState.selectedTool ? "active" : ""
                )}
                onClick={handleLeftBtnClick}
              />
            )
          })}
        </div>
        <div className={`${mainClass}__col-right`}>
          {buttons.right.map(btn => {
            return (
              <button 
                key={btn.id}
                className={`${mainClass}__btn ${btn.id}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
});

export { ToolBar }