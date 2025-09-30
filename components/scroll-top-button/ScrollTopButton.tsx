"use client";
import { useEffect, useState } from "react";
import { PiCaretUpBold } from "react-icons/pi";

const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState("-bottom-20");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn("bottom-10");
      } else {
        setShowTopBtn("-bottom-20");
      }
    });
  }, []);
  const TopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <PiCaretUpBold
      onClick={() => TopHandler()}
      className={`${showTopBtn} duration-500 fixed left-5 bg-white rounded-full border border-neutral-500 p-2 text-neutral-700 text-4xl hover:shadow-[0_0_5px_#00ff0090] z-40 cursor-pointer`}
    />
  );
};

export default ScrollTopButton;
