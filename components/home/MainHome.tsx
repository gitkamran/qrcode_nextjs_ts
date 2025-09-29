import React from "react";

const MainHome = () => {
  return (
    <main className="container mx-auto w-full">
      <section className="flex flex-col items-center justify-center gap-4 md:gap-8 2xl:gap-10 py-10 md:py-16 2xl:py-20 bg-[url('/assets/images/qrcode5.svg')] bg-center bg-cover">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-neutral-900">
          ساخت QR Code
        </h1>
        <div className="flex flex-col gap-2 text-neutral-500 text-center md:text-lg lg:text-xl 2xl:text-2xl px-8 2xl:px-16 leading-7">
          <p>کد‌های QR را سریع و رایگان ایجاد کنید.</p>
          <p>
            از اطلاعات تماس، کلمه عبور وای فای تا داده های متنی و لینک ها را به
            صورت QR Code ایجاد کنید.
          </p>
        </div>
      </section>
      <section className="bg-white flex items-center justify-center border border-neutral-300 rounded-xl p-4 h-96"></section>
    </main>
  );
};

export default MainHome;
