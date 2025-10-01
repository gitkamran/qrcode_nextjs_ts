import React from "react";
import BoxUseCase from "./BoxUseCase";
import MainGenerateQRCodeBox from "../generate-qrcode-box/MainGenerateQRCodeBox";

const MainHome = () => {
  return (
    <main className="w-[90%] lg:w-5xl 2xl:w-6xl mx-auto">
      <section className="flex flex-col items-center justify-center gap-4 md:gap-8 2xl:gap-10 py-10 md:py-16 2xl:py-20 bg-[url('/assets/images/qrcode5.svg')] bg-center bg-cover">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-neutral-900">
          ساخت QR Code
        </h1>
        <div className="flex flex-col gap-2 text-neutral-500 text-center md:text-lg lg:text-xl 2xl:text-2xl px-4 md:px-8 2xl:px-16 leading-7">
          <p>کد‌های QR را سریع و رایگان ایجاد کنید.</p>
          <p>
            از اطلاعات تماس، کلمه عبور وای فای تا داده های متنی و لینک ها را به
            صورت QR Code ایجاد کنید.
          </p>
        </div>
      </section>
      <MainGenerateQRCodeBox />
      <section className="flex flex-col items-center justify-center gap-4 md:gap-8 2xl:gap-10 py-10 md:py-16 2xl:py-20">
        <h3 className="text-2xl 2xl:text-4xl font-bold">
          مناسب برای تمام کارهای شما
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 2xl:gap-8 w-full">
          <BoxUseCase title="سوشال مدیا" />
          <BoxUseCase title="کلمه عبور وای فای" />
          <BoxUseCase title="اطلاعات تماس" />
          <BoxUseCase title="آدرس اینترنتی" />
          <BoxUseCase title="آدرس ایمیل" />
          <BoxUseCase title="شماره تلفن" />
          <BoxUseCase title="لینک دانلود" />
          <BoxUseCase title="جزییات رویداد" />
        </div>
      </section>
    </main>
  );
};

export default MainHome;
