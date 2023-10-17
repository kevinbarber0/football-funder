import React from "react";

interface ProfileImagePanelPropType {
  backImage: string;
  logo: string;
}

export const ProfileImagePanel: React.FC<ProfileImagePanelPropType> = ({
  backImage,
  logo,
}) => {
  return (
    <div className="relative">
      <div className="sm:rounded-20 rounded-b-20 overflow-hidden">
        <img src={backImage} alt="clubimage" />
      </div>
      <div className="absolute w-full flex justify-center -bottom-[60px]">
        <div className="w-[120px] h-[120px] rounded-30 overflow-hidden border-[3px] border-green-70">
          <img src={logo} alt="clublogo" />
        </div>
      </div>
    </div>
  );
};
