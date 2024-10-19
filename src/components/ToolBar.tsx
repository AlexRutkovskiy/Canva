import {useCallback, type FC} from "react";
import { observer } from "mobx-react-lite"
import clsx from "clsx";
import "@styles/bar.scss";

import { Config } from "@config"
import canvasState from "@store/canvasState";
import toolState from "@store/toolState";
import toolManager from "@tools/ToolManager";


const mainClass = "bar";
const buttons = Config.toolbar.buttons;

const ToolBar: FC = observer(() => {

  const handleToolBtnClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const isActive = e.currentTarget.classList.contains('active');
    const name = !isActive ? e.currentTarget.getAttribute('name') : null;
    
    toolState.setTool(name);
    toolManager.run(canvasState.canvas!, name);
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
                onClick={handleToolBtnClick}
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