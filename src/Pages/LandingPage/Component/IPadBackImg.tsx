import React from "react";
import { IPadDataType } from "types";

interface Props {
  value: IPadDataType;
}

export const IPadBackImg: React.FC<Props> = ({ value }) => {
  return (
    <div className="text-[14px] font-medium leading-[25px] text-white h-[682px] ">
      <div
        className=" relative bg-contain bg-no-repeat bg-center h-[531px] mx-auto z-0"
        style={{
          backgroundImage: `url(${value.imageSrc})`,
        }}
      >
        <div className="absolute top-[421px] w-full">
          <div
            className="
            bg-green-20 rounded-20 mx-auto p-[30px]
            sm:w-[527px] ns:w-[390px] max-ns:w-full
           "
          >
            <p
              className=" text-[21px] max-vs:text-[16px] 
              max-vs:leading-5 font-semibold leading-[28px] text-white"
            >
              {value.title}
            </p>
            <p
              className=" mt-[20px] text-[14px] max-vs:text-[12px] 
              max-vs:leading-4 font-medium leading-5 text-green-10"
            >
              {value.description1}
            </p>
            <p
              className="max-sm:hidden  mt-[20px] max-ns:text-[12px] 
              text-[14px] font-medium leading-5 text-green-10"
            >
              {value.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
