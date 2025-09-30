import React from "react";
import {
  PiDownloadSimple,
  PiShieldCheck,
  PiLightning,
  PiHeartFill,
} from "react-icons/pi";
import BoxTopSection from "./BoxTopSection";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-t-neutral-300 w-full pt-20 pb-8">
      <div className="w-[90%] lg:w-5xl 2xl:w-6xl mx-auto flex flex-col items-center justify-center gap-8">
        <section className="flex flex-col md:flex-row items-center justify-around gap-8 border-b border-b-neutral-300 pb-8">
          <BoxTopSection
            icon={<PiShieldCheck />}
            title="امنیت بالا"
            description="با خیال آسوده کیوآر کدی که دوست دارید بسازید"
          />
          <BoxTopSection
            icon={<PiLightning />}
            title="سرعت بی نظیر"
            description="بدون اتلاف وقت و با بالاترین سرعت داده های خود را به کیوآرکد تبدیل کنید"
          />
          <BoxTopSection
            icon={<PiDownloadSimple />}
            title="بهترین کیفیت"
            description="کیوآرکد هایی که ایجار کردید را با بهترین کیفیت ممکنه دانلود کنید"
          />
        </section>
        <section className="w-[70%] flex flex-col items-center gap-4">
          <p className="text-center text-neutral-600 leading-7">
            اطلاعات تماس، ایمیل، شماره تلفن، لینک ها، گذرواژه وای فای و هر داده
            ای متنی دیگری را با سرعت و رایگان تبدیل به QR Code کنید. - هیچ
            داده‌ای به سرورهای ما ارسال نمی‌شود و حریم خصوصی شما را تضمین
            می‌کند.
          </p>
          <div className="flex items-center gap-1 text-neutral-600 pb-8">
            <p>ایجاد شده با</p>
            <PiHeartFill className="text-lg text-red-500" />
            <p>برای شما</p>
          </div>
          <p className="text-sm text-neutral-900">
            ایجاد کدهای QR |{" "}
            <Link href="https://mkamran.ir" target="_blank">
              محمد کامران
            </Link>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
