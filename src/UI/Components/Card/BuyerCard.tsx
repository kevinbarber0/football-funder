import React from "react";

interface BuyCardPropsType {
  cost: string;
  image: string;
}

export const BuyerCard: React.FC<BuyCardPropsType> = ({ cost, image }) => {
  return (
    <div className="flex">
      <div className=" overflow-y-hidden rounded-l-30 w-[130px]">
        <img src={image} alt="cardimage" className="h-full w-full" />
      </div>
      <div
        className="bg-white flex-1 rounded-r-30 box-border border-t-[1px] border-b-[1px] border-r-[1px]
       border-gray-100 py-[9px] px-15"
      >
        <div className="valueText">
          Sit faucibus augue arcu iaculis amet odio nisl ac. Lectus ac et.
        </div>
        <div className="mt-2.5 flex justify-between items-center">
          <div className="bg-green-10 rounded-20 px-15 py-[5px] buttonText max-vs:text-xs max-vs:font-semibold text-green-70">
            {cost}
          </div>
          <div className="smallIntroText">View</div>
        </div>
      </div>
    </div>
  );
};
