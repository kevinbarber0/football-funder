import React from "react";
import classNames from "classnames";
import { SearchDataType } from "types";

interface SearchFormProps {
  data: SearchDataType;
}

export const Search: React.FC<SearchFormProps> = ({ data }) => {
  return (
    <form className="relative flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="w-full">
        <input
          type="text"
          id="simple-search"
          className={classNames(
            "block w-full rounded-lg focus:outline-0",
            data.backgroundColor,
            data.padding,
            data.border,
            data.inputColor,
            data.inputTextSize,
            data.placeholderClass
          )}
          placeholder={data.placeholder}
          autoComplete="off"
          required
        />
      </div>
      <button
        type="submit"
        className={classNames(
          "absolute right-0 ml-2 rounded-lg px-3 py-2",
          data.iconColor,
          data.iconSize
        )}
      >
        <data.icon />
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
