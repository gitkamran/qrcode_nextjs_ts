import { QRCodeCanvas } from "qrcode.react";
import React, { useRef } from "react";

type PropsType = {
  text: string;
  size: number;
};
const QRCodeCanvasComp = ({ text, size }: PropsType) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const downloadPNG = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };
  return (
    <div ref={canvasRef} className="flex flex-col items-start gap-4">
      <QRCodeCanvas
        value={text}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p className="text-gray-500">فرمت PNG</p>
          <p className="text-gray-500">سایز {size + "x" + size}</p>
          <button
            onClick={downloadPNG}
            className="text-neutral-600 cursor-pointer bg-neutral-300 p-2 w-full"
          >
            دانلود رایگان
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeCanvasComp;
