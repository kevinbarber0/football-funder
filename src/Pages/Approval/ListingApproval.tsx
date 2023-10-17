import React from "react";

import { Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import { ApprovalTable } from "./Components";
import { lisingTableData } from "Config";

export const ListingApproval: React.FC = () => {
  return (
    <Template>
      <div className="relative xs:pt-30 pt-10 xs:pb-[150px] pb-[100px]">
        <div className="relative ">
          <div className="absolute w-full top-0 z-0">
            <img
              src={ExploreMask}
              alt="explore back mask"
              className="object-cover w-full max-ns:hidden"
            />
            <img
              src={MobileExploreMask}
              alt="explore back mask"
              className="object-cover w-full ns:hidden"
            />
          </div>
          <div className="relative">
            <div className="px-6">
              <div className="titleText">Listing approvals</div>
              <div className="mt-5 introText">
                Approve or deny listings to go live on the site
              </div>
            </div>
            <div className="my-30 w-full scrollbar-hidden overflow-x-scroll">
              <ApprovalTable tableData={lisingTableData} />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
