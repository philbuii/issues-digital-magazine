import { Canvas, Circle, Rect } from "fabric";
import { useEffect, useRef } from "react";

export default function CanvasEditor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fabricRef = useRef<Canvas | null>(null);

  useEffect(() => {
  if (!canvasRef.current) return;

  fabricRef.current?.dispose();

  const initCanvas = new Canvas(canvasRef.current, {
    width: 1588,
    height: 1123,
    backgroundColor: "#fff",
  });

  fabricRef.current = initCanvas;
  initCanvas.renderAll();

  return () => {
    initCanvas.dispose();
    fabricRef.current = null;
  };
}, []);

  const addRectangle = () => {
    if (fabricRef.current) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 60,
        fill: "#D84D42",
      });

      fabricRef.current.add(rect);
    }
  };

  const addCircle = () => {
    if (fabricRef.current) {
      const circle = new Circle({
        top: 150,
        left: 150,
        radius: 50,
        fill: "#2F4DC6",
      });
      fabricRef.current.add(circle);
    }
  };

  return (
    <div className="flex flex-col items-center justify-around">
      <div className="flex flex-row gap-3">
        <button className="inline-block bg-amber-700" onClick={addRectangle}>
          Rect
        </button>
        <button className="inline-block bg-blue-500" onClick={addCircle}>
          Circle
        </button>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
}
