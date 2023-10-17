import React from "react";
import { CategoryButton } from "UI";
import { CategoryDataType } from "types";

interface CategoryButtonListProps {
  options: CategoryDataType[];
  name: string;
  value: any;
  setValue: (key: string, value: any) => void;
}

export const CategoryButtonList: React.FC<CategoryButtonListProps> = ({
  options,
  name,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {options.map((option, index) => {
        return (
          <div key={index}>
            <CategoryButton
              name={name}
              value={option.value}
              label={option.label}
              checked={value === option.value}
              onChange={setValue}
            />
          </div>
        );
      })}
    </div>
  );
};
