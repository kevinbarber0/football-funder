import React from "react";
import { userFundListDataType } from "types";

export const UserList: React.FC<userFundListDataType> = ({
  fund,
  name,
  startDay,
}) => {
  return (
    <div className="bg-gray-20 rounded-10 p-2.5 flex justify-between">
      <div className="flex gap-2.5">
        <div className="w-[40px] h-[40px] rounded-20 bg-white"></div>
        <div>
          <div className="darkIntroText">{name}</div>
          <div className="valueText">￡ {fund.toLocaleString("en-us")}</div>
        </div>
      </div>
      <div className="text-xs text-gray-10 font-medium">{startDay} ago</div>
    </div>
  );
};
