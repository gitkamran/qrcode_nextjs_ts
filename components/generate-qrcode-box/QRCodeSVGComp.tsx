import { QRCodeSVG } from "qrcode.react";
import React, { useRef } from "react";

type PropsType = {
  text: string;
  size: number;
};
const QRCodeSVGComp = ({ text, size }: PropsType) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadSVG = () => {
    if (!svgRef.current) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgRef.current);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.svg";
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex flex-col items-start gap-4">
      <QRCodeSVG ref={svgRef} value={text} size={size} />
      <div className="flex flex-col gap-4">
        <p className="text-gray-500">فرمت SVG</p>
        <p className="text-gray-500">سایز {size + "x" + size}</p>
        <button
          onClick={downloadSVG}
          className="text-neutral-600 cursor-pointer bg-neutral-300 p-2 w-full"
        >
          دانلود رایگان
        </button>
      </div>
    </div>
  );
};

export default QRCodeSVGComp;
