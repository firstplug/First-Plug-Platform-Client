import React from "react";

const HorizontalSection = ({
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  sixthItem,
  className,
  icon,
}) => {
  return (
    <div
      className={`w-full h-[48px] bg-light-grey pl-84 pt-[12px] pb-[12px] py-2 flex items-center space-x-4 border border-gray  ${className}`}
    >
      <section className="border-r border-gray flex-grow flex justify-center">
        <p className="font-inter font-semibold">{firstItem}</p>
      </section>

      <section className="border-r border-gray flex-grow flex items-center justify-between pr-[20px]">
        <p className="font-inter font-semibold">{secondItem}</p>
        {icon}
      </section>

      <section className="border-r border-gray flex-grow flex items-center justify-between pr-[20px]">
        <p className="font-inter font-semibold">{thirdItem}</p>
        {icon}
      </section>

      <section className="border-r border-gray flex-grow font-semibold">
        <p className="font-inter">{fourthItem}</p>
      </section>

      <section className="border-r border-gray flex-grow font-semibold">
        <p className="font-inter">{fifthItem}</p>
      </section>

      <section className="border-r border-gray flex-grow font-semibold">
        <p className="font-inter">{sixthItem}</p>
      </section>
    </div>
  );
};

export default HorizontalSection;
