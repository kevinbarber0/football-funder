import React from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface EditProfileListTitlePropsType {
  title: string;
  intro?: string;
}

export const EditProfileListTitle: React.FC<EditProfileListTitlePropsType> = ({
  intro,
  title,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="buttonText text-green-70">{title}</div>
        <HiOutlineMenuAlt4 size={20} />
      </div>
      <div className="mt-2.5 introText">{intro}</div>
    </div>
  );
};
