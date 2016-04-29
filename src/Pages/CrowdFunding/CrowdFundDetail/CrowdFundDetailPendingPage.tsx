import React from "react";
import { CrowdFundDetail } from "Pages";

export const CrowdFundDetailPendingPage: React.FC = () => {
  return (
    <div>
      <CrowdFundDetail pending={true} menu={true} />
    </div>
  );
};
