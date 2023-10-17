import React, { useState } from "react";
import classNames from "classnames";

import { Button } from "UI";

import { IoIosArrowDown } from "react-icons/io";
import { BiCheck } from "react-icons/bi";

interface LabelAccordionPropsType {
  address?: string;
  date: string;
  email?: string;
  name: string;
  sent: boolean;
  handleBtnClick: (val: boolean) => void;
}

export const LabelAccordion: React.FC<LabelAccordionPropsType> = ({
  address,
  date,
  email,
  handleBtnClick,
  name,
  sent,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="bg-gray-20 w-full rounded-10 p-2.5 flex justify-between">
      <div className="flex gap-2.5 w-full">
        <div className="w-[40px] h-[40px] rounded-20 bg-white"></div>
        {!sent ? (
          <div className="flex-1 flex flex-col gap-[5px]">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold">{name}</div>
              <div className="flex gap-2.5 items-start">
                <div
                  className={classNames(
                    "text-xs font-medium text-gray-10",
                    showMenu ? "" : "hidden"
                  )}
                >
                  {date} ago
                </div>
                <button
                  className={classNames(showMenu ? "rotate-180" : "rotate-0")}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
            {showMenu && (
              <>
                <div className="darkIntroText ns:w-[300px]">
                  <div>{address}</div>
                  <br />
                  <div>{email}</div>
                </div>
                <div className="mt-15">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[40px]"
                    text="Send Reward"
                    textColor="text-green-70"
                    textSize="text-sm font-semibold"
                    width="w-[120px]"
                    handleClick={() => handleBtnClick(true)}
                  />
                </div>
              </>
            )}
            <div
              className={classNames(
                "text-xs font-medium text-gray-10",
                showMenu ? "hidden" : ""
              )}
            >
              {date} ago
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 w-full">
            <div className="flex justify-between items-center w-full">
              <div className="text-sm font-semibold">{name}</div>
              <div className="flex gap-2.5 items-start">
                <div className={classNames("text-xs font-medium text-gray-10")}>
                  {date} ago
                </div>
                <button
                  className={classNames(showMenu ? "rotate-180" : "rotate-0")}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-[5px]">
              <div>
                <BiCheck />
              </div>
              <div className="text-sm font-semibold">Sent</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
