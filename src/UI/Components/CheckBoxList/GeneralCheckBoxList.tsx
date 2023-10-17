import React from "react";
import { CheckBox } from "UI";
import { RadioButtonDataType } from "types";
import classNames from "classnames";

interface CheckboxListDataProps {
  name: string;
  classes?: string;
  options: RadioButtonDataType[];
  value: any;
  setValue: (key: string, value: any) => void;
  textStyle: string;
}

export const GeneralCheckBoxList: React.FC<CheckboxListDataProps> = ({
  classes,
  options,
  textStyle,
  name,
  setValue,
  value,
}) => {
  const handleCheckboxValue = (selectedValue: any) => {
    // if (checkboxValue[name] === undefined) {
    //   checkboxValue[name] = [];
    // }
    const index = value.findIndex((val: any) => val === selectedValue);
    const updatedcheckboxValue = { ...value };
    if (index && index < 0) {
      updatedcheckboxValue[name] = [...value, selectedValue];
    } else {
      const filteredData = value.filter((val: any) => val !== value);
      updatedcheckboxValue[name] = filteredData;
    }
    setValue(name, updatedcheckboxValue);
  };
  return (
    <div className={classNames(classes || "mt-5 flex flex-col gap-5")}>
      {options.map((item, index) => {
        return (
          <div key={index}>
            <CheckBox
              align="flex-row-reverse gap-[10px]"
              value={item.value}
              label={item.label}
              textClass={textStyle}
              checked={value.includes(item.value)}
              onChange={handleCheckboxValue}
            />
          </div>
        );
      })}
    </div>
  );
};
