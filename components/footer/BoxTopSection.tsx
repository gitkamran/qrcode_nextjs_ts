import React from "react";

type PropsType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const BoxTopSection = ({ icon, title, description }: PropsType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 rounded-xl bg-neutral-200 flex items-center justify-center text-4xl">
        {icon}
      </div>
      <span className="text-2xl 2xl:text-3xl text-neutral-800">{title}</span>
      <p className="text-lg text-neutral-500 text-center">{description}</p>
    </div>
  );
};

export default BoxTopSection;
