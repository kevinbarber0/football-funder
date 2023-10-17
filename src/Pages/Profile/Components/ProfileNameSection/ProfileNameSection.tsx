import React from "react";

import PoweredbyImage from "Assets/images/profile/poweredbyimage.png";

interface ProfileNamePropsType {
  name: string;
}

export const ProfileNameSection: React.FC<ProfileNamePropsType> = ({
  name,
}) => {
  return (
    <>
      <div className="max-vs:text-3xl text-[32px] font-semibold text-white">
        {name}
      </div>
      <div className="mt-30 flex flex-col items-center">
        <div className="flex gap-2.5 items-center">
          <div className="text-[10px] text-white">Powered by</div>
          <img src={PoweredbyImage} alt="poweredbyimage" />
        </div>
      </div>
    </>
  );
};
