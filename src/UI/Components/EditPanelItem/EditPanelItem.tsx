import React from "react";

interface EditPanelItemProps {
  index: string;
  value: string;
}

export const EditPanelItem: React.FC<EditPanelItemProps> = ({
  index,
  value,
}) => {
  return (
    <div className="generalSmallText text-gray-600">
      {index}
      <div className="mt-[5px] text-[16px] font-semibold leading-5 text-green-70">
        {value}
      </div>
    </div>
  );
};
