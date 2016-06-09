import React from "react";
import { TextButton } from "UI";
import { PageTitleType } from "types";

export const PageTitle: React.FC<PageTitleType> = ({
  title,
  introText,
  linkText,
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="titleText">{title}</div>
      {introText && (
        <div className=" flex justify-between max-md:flex-col gap-y-[10px]">
          <div className="introText">{introText}</div>
          {linkText && (
            <div className="flex gap-1">
              <div className="introText">{linkText}</div>
              <TextButton text="Log in here." />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
