import React from "react";
import classNames from "classnames";

interface CategoryButtonPropsType {
  label: string;
  value: number;
  name: string;
  checked: boolean;
  onChange: (key: string, value: any) => void;
}

export const CategoryButton: React.FC<CategoryButtonPropsType> = ({
  name,
  label,
  value,
  checked,
  onChange,
}) => {
  const handleSelect = () => {
    onChange(name, value);
  };
  return (
    <div className="flex justify-center peer" onClick={handleSelect}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleSelect}
        className="appearance-none"
      />
      <label
        className={classNames(
          "cursor-pointer select-none rounded-xl px-[50px] max-md:px-8 py-[15px]",
          "text-green-70 text-[14x] leading-[20px] font-semibold",
          "border-[1px] border-gray-300",
          checked && "bg-green-10"
        )}
      >
        {label}
      </label>
    </div>
  );
};
