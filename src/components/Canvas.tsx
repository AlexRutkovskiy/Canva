import { type FC } from "react";
import "@styles/canvas.scss";

const mainClass = "canvas";

const Canvas: FC = () => {
  return (
    <div className={mainClass}>
      <canvas 
        width={600}
        height={400}
      />
    </div>
  )
}

export { Canvas }