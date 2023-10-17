import React from "react";
import { CrowdFundDetail } from "Pages";

export const CrowdFundDetailLiveMenuPage: React.FC = () => {
  return (
    <div>
      <CrowdFundDetail pending={false} menu={true} />
    </div>
  );
};
