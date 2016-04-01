import React, { useState } from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface SelectCardPropsType {
  image: string;
  value: string;
  title: string;
  selectedValues: string[];
  setValues: (val: string[]) => void;
}

export const SelectCard: React.FC<SelectCardPropsType> = ({
  image,
  title,
  value,
  selectedValues,
  setValues,
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  const onHandleSelectedCard = (value: string) => {
    const index = selectedValues.findIndex((val) => val === value);
    if (index < 0) {
      setValues([...selectedValues, value]);
      setSelected(true);
    } else {
      const filteredData = selectedValues.filter((val) => val !== value);
      setValues(filteredData);
      setSelected(false);
    }
  };

  return (
    <div className="flex">
      <div className="relative rounded-l-10 overflow-hidden w-[100px]">
        <img src={image} alt="cardimages" className="w-full h-full" />
        {!selected && (
          <div className="absolute top-0 left-0">
            <div className="bg-gray-300 p-[5px] rounded-br-10">
              <HiOutlineMenuAlt4 />
            </div>
          </div>
        )}
      </div>
      <div className="p-15 flex-1 flex justify-between items-center gap-2.5 rounded-r-10 border-[1px] border-gray-300">
        <div className="flex-1">
          <div className="valueText ns:w-[225px] w-full">{title}</div>
        </div>
        {selected ? (
          <div
            className="text-green-10"
            onClick={() => onHandleSelectedCard(value)}
          >
            <BsFillCheckCircleFill size={20} />
          </div>
        ) : (
          <div
            className="w-5 h-5 rounded-full border-[1px] border-gray-300"
            onClick={() => onHandleSelectedCard(value)}
          ></div>
        )}
      </div>
    </div>
  );
};
