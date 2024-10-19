import { ChangeEvent, useCallback, useRef, type FC } from "react";
import { observer } from "mobx-react-lite";
import "@styles/bar.scss";


import toolState from "@store/toolState";
import { ToolsName } from "@config";

const mainClass = "bar";

const NAME_INPUT = {
  FILL: "fill",
  SIZE: "size",
  BORDER: "border"
};


const SettingsBar: FC = observer(() => {
  const inputsRef = useRef<Record<string, HTMLInputElement>>({})

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name) {
      case NAME_INPUT.FILL:
        toolState.setFillColor(value);
        break;
      case NAME_INPUT.SIZE:
        toolState.setWidth(parseInt(value));
        break;
      case NAME_INPUT.BORDER:
        toolState.setBorderColor(value)
        break;
      default: return;
    }
  }, [])


  return (
    <div className={mainClass}>
      <div className={`${mainClass}__wrapper`}>
        <div className={`${mainClass}__col-left`}>
          <label>
            <span>Цвет заливки</span>
            <input 
              type="color" 
              name={NAME_INPUT.FILL}
              onChange={handleChange} 
              ref={(el: HTMLInputElement) => inputsRef.current[NAME_INPUT.FILL] = el}
              disabled={!toolState.selectedTool || toolState.selectedTool === ToolsName.ERASER}
            />
          </label>
          <label>
            <span>Толщина</span>
            <input 
              type="number" 
              min={1} 
              max={20} 
              defaultValue={1} 
              name={NAME_INPUT.SIZE}
              onChange={handleChange}
              ref={(el: HTMLInputElement) => inputsRef.current[NAME_INPUT.SIZE] = el}
              disabled={!toolState.selectedTool || toolState.selectedTool === ToolsName.ERASER}
            />
          </label>
          <label>
            <span>Цвет рамок</span>
            <input 
              type="color" 
              name={NAME_INPUT.BORDER}
              onChange={handleChange}
              ref={(el: HTMLInputElement) => inputsRef.current[NAME_INPUT.BORDER] = el}
              disabled={!toolState.selectedTool || toolState.selectedTool === ToolsName.ERASER}
            />
          </label>
        </div>
      </div>
    </div>
  )
})

export { SettingsBar }