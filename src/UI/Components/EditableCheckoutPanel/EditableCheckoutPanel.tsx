import React from "react";
import { AddmoreBtn } from "UI";
import { RiDeleteBinLine } from "react-icons/ri";

interface EditableCheckoutPanelProps {
  handleClick: () => void;
  value: boolean;
}

export const EditableCheckoutPanel: React.FC<EditableCheckoutPanelProps> = ({
  handleClick,
  value,
}) => {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 generalSmallText">
          Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem
          pellentesque lectus sollicitudin.
        </div>
        <div className="col-span-2 flex justify-end gap-10">
          <div className="valueText">1</div>
          <div className="flex flex-col items-end justify-between">
            <div className="valueText ">£5.99</div>
            <button onClick={handleClick}>
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <AddmoreBtn />
      </div>
    </div>
  );
};
