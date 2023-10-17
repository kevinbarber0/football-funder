import React from "react";

import { BsFillInfoCircleFill } from "react-icons/bs";

export const NoticeBoard: React.FC = () => {
  return (
    <div className="w-full px-15 py-5 generalSmallText flex items-center gap-2.5 text-white rounded-10 bg-green-80">
      <BsFillInfoCircleFill />
      <div>Sheldon Cooper hasn't contributed to any fundraisers yet.</div>
    </div>
  );
};
