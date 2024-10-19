import { 
  type FC, 
  useState, 
  useEffect, 
  useRef, 
  useLayoutEffect, 
  useCallback 
} from "react";
import { observer } from "mobx-react-lite";
import "@styles/canvas.scss";


import { Config } from "@config";
import canvasState from "@store/canvasState";

interface CanvasCoor {
  x: number;
  y: number;
}

const mainClass = "canvas";

const Canvas: FC = observer(() => {
  const [coords, setCoords] = useState<CanvasCoor>({x: 0, y: 0})
  const refDivContainer = useRef<HTMLDivElement>(null)
  const refCanvas = useRef<HTMLCanvasElement>(null)

  const handleSetCoord = useCallback(() => {
    const data = refDivContainer.current?.getBoundingClientRect();
    if (!data) {
      return {x: 0, y: 0}
    };

    return { 
      x: data.width - Config.canvas.offset, 
      y: data.height - Config.canvas.offset 
    }
  }, [])

  const handleResize = useCallback(() => {
    setCoords(() => handleSetCoord())
  }, [handleSetCoord]);

  useLayoutEffect(() => {
    setCoords(() => handleSetCoord())
  }, [handleSetCoord])

  useEffect(() => {
    canvasState.setCanvas(refCanvas.current);
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])


  return (
    <div className={mainClass} ref={refDivContainer} >
      <canvas 
        width={coords.x} 
        height={coords.y}
        ref={refCanvas}
      />
    </div>
  )
})

export { Canvas }