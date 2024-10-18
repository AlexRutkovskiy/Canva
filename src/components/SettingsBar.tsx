import { type FC } from "react";
import "@styles/bar.scss";

const mainClass = "bar";

const SettingsBar: FC = () => {

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__wrapper`}>
        Settings Bar
      </div>
    </div>
  )
}

export { SettingsBar }