import React from "react";
import { WithdrawFundItemType } from "types";

export const WithdrawFundItem: React.FC<WithdrawFundItemType> = ({
  intro,
  value,
}) => {
  return (
    <div>
      <div className="introText">{intro}</div>
      <div className="stepLabelTitle">{value}</div>
    </div>
  );
};
