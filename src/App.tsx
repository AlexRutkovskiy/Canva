import { type FC } from "react";
import "@styles/app.scss";

import { ToolBar } from "@components/ToolBar";
import { SettingsBar } from "@components/SettingsBar";
import { Canvas } from "@components/Canvas";

const mainClass = "app"

const App: FC = () => {
  
  return (
    <div className={mainClass}>
      <div className={`${mainClass}__panel`}>
        <ToolBar />
        <SettingsBar />
      </div>
      <Canvas />
    </div>
  )
}

export { App }; 