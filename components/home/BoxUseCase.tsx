import React from "react";

type PropsType = {
  title: string;
};
const BoxUseCase = ({ title }: PropsType) => {
  return (
    <div className="bg-neutral-100 rounded-lg p-4 md:p-6 2xl:p-8 flex items-center justify-center">
      <span className="text-neutral-800 text-lg md:text-xl 2xl:text-2xl">{title}</span>
    </div>
  );
};

export default BoxUseCase;
