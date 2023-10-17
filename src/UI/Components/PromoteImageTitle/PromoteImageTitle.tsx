import React from "react";
import classNames from "classnames";
import { PromoteImageTitlePropsType } from "types";

export const PromoteImageTitle: React.FC<PromoteImageTitlePropsType> = ({
  alignStyle,
  image,
  subheading,
  heading,
  topIntroText,
  underIntroText,
}) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center max-mm:flex-col-reverse gap-y-5 gap-x-14 max",
        alignStyle ? "flex-row" : "flex-row-reverse "
      )}
    >
      <div>
        <img src={image} alt="titleimage" />
      </div>
      <div className="w-[390px] max-ns:w-full">
        <div className="stepLabelTitle">{heading}</div>
        <div className="mt-2.5 text-[16px] leading-[22px] font-semibold text-green-70">
          {subheading}
        </div>
        <div className="mt-30 introText max">
          {topIntroText}
          <br />
          <br />
          {underIntroText}
        </div>
      </div>
    </div>
  );
};
