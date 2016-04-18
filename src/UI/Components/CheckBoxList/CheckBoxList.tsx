import React from "react";
import { CheckBox } from "UI";
import { RadioButtonDataType } from "types";

interface FilterDataProps {
  options: RadioButtonDataType[];
  name: string;
  value: any;
  setValue: (key: string, value: any) => void;
}

export const CheckBoxList: React.FC<FilterDataProps> = ({
  options,
  name,
  setValue,
  value,
}) => {
  const handleCheckboxValue = (selectedValue: any) => {
    if (value === 1) {
      setValue(name, [...value, options.values]);
    } else {
      const index = value.findIndex((val: any) => val === selectedValue);
      if (index < 0) {
        const filteredData = value.filter((val: any) => val !== 1);
        setValue(name, [...filteredData, value]);
      } else {
        const filteredData = value.filter(
          (val: any) => val !== value && val !== 1
        );
        setValue(name, filteredData);
      }
    }
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      {options.map((item, index) => {
        return (
          <div key={index}>
            <CheckBox
              value={item.value}
              onChange={handleCheckboxValue}
              checked={value.includes(item.value)}
              label={item.label}
              textClass="text-green-70 generalText"
            />
          </div>
        );
      })}
    </div>
  );
};
