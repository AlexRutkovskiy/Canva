import { type FC } from "react";

const mainClass = "canvas";

const Canvas: FC = () => {
  return (
    <div className={mainClass}>
      <canvas />
    </div>
  )
}

export { Canvas }