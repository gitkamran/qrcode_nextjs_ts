import React from "react";
import { PiDownloadSimple, PiShieldCheck, PiLightning } from "react-icons/pi";
import BoxTopSection from "./BoxTopSection";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-t-neutral-300 w-full py-20">
      <div className="container mx-auto px-2 md:px-0">
        <section className="flex flex-col md:flex-row items-center justify-around gap-8">
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
      </div>
    </footer>
  );
};

export default Footer;
