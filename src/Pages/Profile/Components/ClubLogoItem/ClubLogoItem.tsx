import React from "react";

interface ClubLogoItemPropsType {
  image: string;
  clubName: string;
}

export const ClubLogoItem: React.FC<ClubLogoItemPropsType> = ({
  clubName,
  image,
}) => {
  return (
    <div className="w-[100px] flex flex-col items-center gap-15">
      <div className="w-[100px] h-[100px] rounded-30 overflow-hidden">
        <img src={image} alt="logo1" />
      </div>
      <div className="text-lg text-center text-white font-semibold w-full">
        {clubName}
      </div>
    </div>
  );
};
