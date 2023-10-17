import React from "react";
import { SponsorshipDetail } from "Pages";

export const SponsorshipDetailPendingPage: React.FC = () => {
  return (
    <div>
      <SponsorshipDetail pending={true} />
    </div>
  );
};
