"use client";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import React, { useRef, useState } from "react";
import { PiCopy } from "react-icons/pi";

type FormatType = "svg" | "png";
const MainGenerateQRCodeBox = () => {
  const [text, setText] = useState<string>("");
  const [size, setSize] = useState<number>(200);
  const [type, setType] = useState<FormatType>("svg");
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadPNG = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

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
    <section className="bg-white border border-neutral-300 rounded-xl p-2 md:p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-neutral-800">ایجاد QR Code</h3>
        <p className="text-neutral-500">
          برای ساخت QR Code متن، لینک یا داده متنی خود را وارد کنید.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="myText">متن یا لینک</label>
          <div className="flex items-center gap-2">
            <input
              onChange={(e) => setText(e.target.value)}
              id="myText"
              type="text"
              value={text}
              placeholder="متن، لینک یا داده متنی..."
              className="bg-neutral-200 rounded-lg p-2 w-full"
            />
            <div className="rounded-lg p-2 border border-neutral-300 bg-white cursor-pointer">
              <PiCopy className="text-neutral-500 text-2xl" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <select
            onChange={(e) => setSize(+e.target.value)}
            value={size}
            className="bg-neutral-200 p-2 rounded-lg w-full text-neutral-800"
          >
            <option value={150}>150x150</option>
            <option value={200}>200x200</option>
            <option value={300}>300x300</option>
            <option value={400}>400x400</option>
            <option value={500}>500x500</option>
          </select>
          <select
            onChange={(e) => setType(e.target.value as FormatType)}
            value={type}
            className="bg-neutral-200 p-2 rounded-lg w-full text-neutral-800"
          >
            <option value={"png"}>PNG</option>
            <option value={"svg"}>SVG</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        {text.length > 3 && type === "png" ? (
          <div
            ref={canvasRef}
            className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-start gap-4"
          >
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
        ) : (
          text.length > 3 &&
          type === "svg" && (
            <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row items-start gap-4">
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
          )
        )}
      </div>
    </section>
  );
};

export default MainGenerateQRCodeBox;
