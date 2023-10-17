import React from "react";
import { AdDetail } from "Pages";

export const AdDetailPendingPage: React.FC = () => {
  return (
    <div>
      <AdDetail pending={true} />
    </div>
  );
};
