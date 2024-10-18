import {type FC} from "react";
import "@styles/bar.scss";

import { Config } from "@config"


const mainClass = "bar";
const buttons = Config.toolbar.buttons;

const ToolBar: FC = () => {
  
  
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__wrapper`}>
        <div className={`${mainClass}__col-left`}>
          {buttons.left.map(btn => {
            return (
              <button 
                key={btn.id}
                className={`${mainClass}__btn ${btn.id}`}
              />
            )
          })}
          <input type="color" />
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
}

export { ToolBar }