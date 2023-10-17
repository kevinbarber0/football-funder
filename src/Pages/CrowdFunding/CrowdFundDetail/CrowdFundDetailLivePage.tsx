import React from "react";
import { CrowdFundDetail } from "Pages";

export const CrowdFundDetailLivePage: React.FC = () => {
  return (
    <div>
      <CrowdFundDetail pending={false} menu={false} />
    </div>
  );
};
