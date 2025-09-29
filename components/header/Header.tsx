import Link from "next/link";
import React from "react";
import { PiGithubLogo } from "react-icons/pi";

const Header = () => {
  return (
    <header className="w-full border-b border-b-neutral-300">
      <div className="container mx-auto p-2 sm:px-0">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0">
            <span className="md:text-lg 2xl:text-xl font-bold">ساخت QR Code</span>
            <span className="text-sm md:text-base 2xl:text-lg text-neutral-500">سریع و رایگان</span>
          </div>
          <Link
            href="https://github.com/gitkamran"
            target="_blank"
            className="flex items-center justify-center gap-1 text-neutral-800 bg-neutral-200"
          >
            <span className="text-lg">گیتاب</span>
            <PiGithubLogo className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
