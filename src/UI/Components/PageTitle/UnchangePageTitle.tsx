import React from "react";
import { TextButton } from "UI";
import { PageTitleType } from "types";

export const UnchangePageTitle: React.FC<PageTitleType> = ({
  title,
  introText,
  linkFunction,
  linkText,
}) => {
  return (
    <div className="flex flex-col gap-15">
      <div className="generalTitle">{title}</div>
      {introText && (
        <div className="flex gap-1">
          <div className="introText">{introText}</div>
          {linkText && <TextButton text="Sign in" handleClick={linkFunction} />}
        </div>
      )}
    </div>
  );
};
