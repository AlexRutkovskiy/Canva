import {type FC} from "react";
import "@styles/bar.scss";

const mainClass = "bar";

const ToolBar: FC = () => {
  return (
    <div className={mainClass}>
      Tool bar
    </div>
  )
}

export { ToolBar }