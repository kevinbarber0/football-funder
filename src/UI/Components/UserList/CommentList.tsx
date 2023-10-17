import React from "react";

export const CommentList: React.FC = () => {
  return (
    <div className="bg-gray-20 rounded-10 p-2.5 flex gap-2.5">
      <div className="w-[40px] h-[40px] rounded-20 bg-white"></div>
      <div className="flex-1">
        <div className="darkIntroText">Me</div>
        <div className="mt-2.5">
          <textarea
            className="rounded-10 bg-white w-full resize-none appearance-none focus:outline-none p-2.5 text-sm font-medium"
            placeholder="Type something..."
          />
        </div>
        <div className="mt-2.5 darkIntroText">Comment</div>
      </div>
    </div>
  );
};
