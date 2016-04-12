import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { AppState } from "App/reducers";
// import { SIGNUP_URL } from "Lib/urls";
import Arrow from "Assets/images/svg/button/black-arrow";
import { MenuItemType } from "types";

export interface DropdownProps {
  List: MenuItemType;
}

export const Dropdown: React.FC<DropdownProps> = ({ List }) => {
  const navigate = useNavigate();
  // const isAuth = useSelector((state: AppState) => state.auth.loggedIn);

  return (
    <div className="relative group cursor-pointer">
      <button
        id="dropdownDefaultButton"
        className="bg-green-10 p-[10px] hover:bg-black hover:bg-opacity-5 
          rounded-lg text-[14px] font-semibold leading-5 text-center inline-flex items-center"
      >
        {List.title}
        {List.children && <Arrow />}
      </button>
      {List.children && (
        <div className="hidden group-hover:flex">
          <div
            id="dropdown"
            className="
            absolute origin-top-right shadow-lg ring-1 ring-black  
            bg-green-70 rounded-10 w-[120px] overflow-hidden z-50"
          >
            <div className="text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-700">
              {List.children.map((key, index) => (
                <div key={index}>
                  <button
                    className="block w-full text-[14px] font-semibold leading-5 px-[10px] py-[10px] 
                      hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => {
                      navigate(key.href);
                    }}
                  >
                    <div className="flex justify-start">{key.title}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
