import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

function SectionWrapper({ children, title }: Props) {
  return (
    <section className="flex flex-col gap-4 md:gap-8 my-10 md:my-20 px-4 md:px-8">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4">
        <div className="w-full h-0.5 rounded-sm bg-primary" />
        <h2 className="min-w-fit text-sm md:text-md text-primary font-bold leading-loose px-4 bg-white py-2 rounded-full border-2 border-primary uppercase">
          {title}
        </h2>
        <div className="w-full h-0.5 bg-primary" />
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
