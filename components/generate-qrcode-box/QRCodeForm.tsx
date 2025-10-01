import React from "react";
import { PiCopy } from "react-icons/pi";

type PropsType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  type: FormatType;
  setType: React.Dispatch<React.SetStateAction<FormatType>>;
};

type FormatType = "svg" | "png";

const QRCodeForm = ({
  text,
  setText,
  size,
  setSize,
  type,
  setType,
}: PropsType) => {
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText(clipboardText);
    } catch (err) {
      console.error("خطا در خواندن کلیپ‌بورد:", err);
      alert("مرورگر اجازه دسترسی به کلیپ‌بورد نداد!");
    }
  };

  return (
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
          <div
            onClick={handlePaste}
            className="rounded-lg p-2 border border-neutral-300 bg-white cursor-pointer"
          >
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
          <option value={64}>64x64</option>
          <option value={128}>128x128</option>
          <option value={256}>256x256</option>
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
  );
};

export default QRCodeForm;
