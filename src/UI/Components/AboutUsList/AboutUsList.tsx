import React from "react";
import classNames from "classnames";
import { Button } from "UI";

interface AbouUsListPropsType {
  alignStyle: string;
  image: string;
  title: string;
  introText1: string;
  introText2: string;
  buttonOneName: string;
  buttonTwoName: string;
  fullButtonName?: string;
}

export const AboutUsList: React.FC<AbouUsListPropsType> = ({
  alignStyle,
  buttonOneName,
  buttonTwoName,
  image,
  introText1,
  introText2,
  title,
  fullButtonName,
}) => {
  return (
    <div
      className={classNames(
        "flex max-xm:flex-col-reverse items-center gap-x-[60px]",
        alignStyle
      )}
    >
      <img src={image} alt="imageone" className="max-xm:hidden" />
      <div className="ns:w-[390px] w-full">
        <div className="stepLabelTitle">{title}</div>
        <div className="mt-5 introText">
          {introText1}
          <br />
          <br />
          <img src={image} alt="imageone" className="xm:hidden" />
          {introText2}
        </div>
        <div className="mt-30">
          <div className="flex gap-2.5 h-[50px]">
            <div className="w-1/2">
              <Button
                backgroundColor="bg-green-10"
                padding="px-[2px]"
                width="w-full"
                height="h-full"
                text={buttonOneName}
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
            <div className="w-1/2">
              <Button
                backgroundColor="bg-green-10"
                padding="py-1"
                text={buttonTwoName}
                width="w-full"
                height="h-full"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
          {fullButtonName && (
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-10"
                padding="px-7 py-4"
                width="w-full"
                text={fullButtonName}
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
