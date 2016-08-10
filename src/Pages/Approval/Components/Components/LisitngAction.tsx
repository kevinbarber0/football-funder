import React, { useState, useEffect } from "react";

import { ListingActionBtn } from "./LisitngActionBtn";

import { BsCheckLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";

interface LisitngActionPropsType {
  status: number;
}

export const ListingAction: React.FC<LisitngActionPropsType> = ({ status }) => {
  const [checkBtnStatus, setCheckBtnStatus] = useState<boolean>(true);
  const [closeBtnStatus, setCloseBtnStatus] = useState<boolean>(true);

  useEffect(() => {
    if (status === 0 || status === 3) {
      setCheckBtnStatus(false);
    } else {
      setCheckBtnStatus(true);
    }

    if (status === 2 || status === 3) {
      setCloseBtnStatus(false);
    } else {
      setCloseBtnStatus(true);
    }
  }, [status]);

  return (
    <div className="flex gap-2.5">
      <div className="flex gap-2.5">
        <ListingActionBtn
          bgColor="bg-green-10"
          icon={BsCheckLg}
          disabled={!checkBtnStatus}
        />
        <ListingActionBtn
          bgColor="bg-red-500"
          icon={MdClose}
          disabled={!closeBtnStatus}
        />
      </div>
    </div>
  );
};
