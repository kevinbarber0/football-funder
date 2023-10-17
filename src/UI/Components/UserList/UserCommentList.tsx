import React from "react";
import classNames from "classnames";
import { userCommentListDataType } from "types";

export const UserCommentList: React.FC<userCommentListDataType> = ({
  chat,
  commentNum,
  Icon,
  name,
  startDay,
}) => {
  return (
    <div className="bg-gray-20 rounded-10 p-2.5 flex gap-2.5">
      <div className="w-[40px] h-[40px] rounded-20 bg-white"></div>
      <div className="flex-1">
        <div className="darkIntroText">{name}</div>
        <div className="introText">{chat}</div>
        <div className="mt-5 text-xs text-gray-10 font-medium flex justify-between">
          <div>{startDay} ago</div>
          <div className="flex items-center gap-1">
            <div>{commentNum}</div>
            <div className={classNames(commentNum && "text-green-10")}>
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
