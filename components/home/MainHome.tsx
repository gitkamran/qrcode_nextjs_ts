import React from "react";

const MainHome = () => {
  return (
    <main className="container mx-auto w-full">
      <section className="flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="text-6xl font-bold text-neutral-700">ساخت QR Code</h1>
        <div className="flex flex-col gap-2 text-neutral-500 text-center text-2xl">
          <p>
            کدهای QR سفارشی شده رایگان و سریع ایجاد کنید.
          </p>
          <p>
            از اطلاعات تماس کلمه عبور وای فای تا هرگونه داده های متنی و لینک ها
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center border border-neutral-300 rounded-xl p-4 h-96"></section>
    </main>
  );
};

export default MainHome;
