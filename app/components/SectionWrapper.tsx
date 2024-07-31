import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

function SectionWrapper({ children, title }: Props) {
  return (
    <section className="flex flex-col gap-4 md:gap-8 my-10 md:my-20 px-4 md:px-8">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-md font-bold leading-loose px-4 bg-white py-2 rounded-full border-2 border-gray-300 uppercase">
          {title}
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
