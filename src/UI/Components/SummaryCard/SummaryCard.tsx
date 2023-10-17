import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  backgroundImage: string;
  description: string;
  linkUrl: string;
  buttonName: string;
  title: string;
}

export const SummaryCard: React.FC<Props> = ({
  backgroundImage,
  buttonName,
  description,
  linkUrl,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-20 overflow-hidden">
      <img src={backgroundImage} className="h-[224px] object-cover" alt="" />
      <div className="absolute top-0 w-full h-full px-[25px] py-[20px] max-xs:px-5">
        <div className="text-white font-semibold text-[21px]  leading-[28px]">
          {title}
        </div>
        <div className="mt-[10px] w-[240px] max-vs:w-full text-green-10 font-medium text-[16px] max-vs:text-[14px] leading-[22px]">
          {description}
        </div>
        <div className="mt-9">
          <button
            className="rounded-10 bg-white text-black 
                    font-semibold text-[16px] max-vs:text-[14px] leading-[22px] px-[25px] h-[42px]"
            onClick={() => navigate(linkUrl)}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};
