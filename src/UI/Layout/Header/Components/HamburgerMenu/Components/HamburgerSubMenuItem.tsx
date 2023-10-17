import React from "react";
import { useNavigate } from "react-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileMenu } from "Data/LayoutState";
// import { AppState } from "App/reducers";
// import { SIGNUP_URL } from "Lib/urls";
import { MenuItemType } from "types";

export interface ListItemProps {
  List: MenuItemType;
}

export const HamburgerSubMenuItem: React.FC<ListItemProps> = ({ List }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isAuth = useSelector((state: AppState) => state.auth.loggedIn);

  const onGoNavigate = (href: string) => {
    navigate(href);
    dispatch(setShowMobileMenu(false));
  };
  return (
    <>
      <div className="px-[10px] py-[20px]">
        <button className="text-white leading-[24px] font-medium text-[18px]">
          {List.title}
        </button>
        <div className="mt-[20px] flex flex-col gap-5">
          {List.children.map((element, index) => (
            <div key={index}>
              <button
                className="text-green-10 font-medium text-[16px] leading-[22px]"
                onClick={() => onGoNavigate(element.href)}
              >
                {element.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
