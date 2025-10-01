"use client";
import React, { useState } from "react";
import QRCodeSVGComp from "./QRCodeSVGComp";
import QRCodeCanvasComp from "./QRCodeCanvasComp";
import QRCodeForm from "./QRCodeForm";

type FormatType = "svg" | "png";
const MainGenerateQRCodeBox = () => {
  const [text, setText] = useState<string>("");
  const [size, setSize] = useState<number>(128);
  const [type, setType] = useState<FormatType>("svg");

  return (
    <section className="bg-white border border-neutral-300 rounded-xl p-2 md:p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl text-neutral-800">ایجاد QR Code</h3>
        <p className="text-neutral-500">
          برای ساخت QR Code متن، لینک یا داده متنی خود را وارد کنید.
        </p>
      </div>
      <QRCodeForm
        size={size}
        setSize={setSize}
        text={text}
        setText={setText}
        type={type}
        setType={setType}
      />
      <div className="flex items-center justify-center w-full">
        {text.length > 3 && type === "png" && (
          <QRCodeCanvasComp text={text} size={size} />
        )}
        {text.length > 3 && type === "svg" && (
          <QRCodeSVGComp text={text} size={size} />
        )}
      </div>
    </section>
  );
};

export default MainGenerateQRCodeBox;
