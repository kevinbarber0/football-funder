import React, { useState } from "react";

import { IconType } from "react-icons/lib";

interface SocialMediaLinkPropsType {
  baseUrl: string;
  icon: IconType;
  label: string;
  placeholder: string;
  setUrl: (val: string) => void;
  defaultUrl: string;
}

export const SocialMediaLink: React.FC<SocialMediaLinkPropsType> = ({
  baseUrl,
  icon: Icon,
  label,
  placeholder,
  defaultUrl,
  setUrl,
}) => {
  const [inputUrl, setInputUrl] = useState<string>("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = event.target.value;
    setInputUrl(inputUrl);
    setUrl(inputUrl);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setInputUrl(baseUrl);
    }
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === baseUrl) {
      setInputUrl("");
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputUrl}
        className="py-15 pl-[50px] pr-15 darkIntroText w-full appearance-none focus:outline-none 
        border-[1px] border-gray-300 rounded-10"
        placeholder={placeholder}
        onChange={onChangeHandler}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className="absolute top-0 left-[15px] h-full flex items-center text-xl">
        <Icon />
      </div>
    </div>
  );
};
