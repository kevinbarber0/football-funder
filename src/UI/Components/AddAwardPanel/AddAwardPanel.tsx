import React, { useContext } from "react";
import { Button } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export const AddAwardPanel: React.FC = () => {
  const {
    isClickedAddrewardBtn,
    handleClickNoAddrewardBtn,
    handleClickAddrewardBtn,
  } = useContext(FormStepperContext);
  return (
    <div className="ns:w-[410px] w-full p-15 bg-gray-200 rounded-10">
      <div className="text-[16px] leading-[20px] font-semibold text-green-70">
        Would you like to add rewards to your fundraiser?
      </div>
      <div className="mt-15">
        <div className="flex justify-center gap-[10px]">
          <Button
            backgroundColor={
              isClickedAddrewardBtn ? "bg-green-70" : "bg-green-10"
            }
            height="h-[50px]"
            width="w-[175px]"
            textColor={isClickedAddrewardBtn ? "text-white" : "text-green-70"}
            textSize="text-[16px] leading-[20px] font-semibold"
            text="Yes"
            handleClick={handleClickAddrewardBtn}
          />
          <Button
            backgroundColor={
              isClickedAddrewardBtn ? "bg-green-10" : "bg-green-70"
            }
            height="h-[50px]"
            width="w-[175px]"
            textColor={isClickedAddrewardBtn ? "text-green-70" : "text-white"}
            textSize="text-[16px] leading-[20px] font-semibold"
            text="No"
            handleClick={handleClickNoAddrewardBtn}
          />
        </div>
      </div>
    </div>
  );
};
