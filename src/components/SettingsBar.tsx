import { type FC } from "react";
import "@styles/bar.scss";

const mainClass = "bar";

const SettingsBar: FC = () => {

  return (
    <div className={mainClass}>
      Settings Bar
    </div>
  )
}

export { SettingsBar }