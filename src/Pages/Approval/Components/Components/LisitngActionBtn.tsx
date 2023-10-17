import classNames from "classnames";
import { IconType } from "react-icons/lib";

interface LisitngActionBtnPropsType {
  bgColor: string;
  icon: IconType;
  disabled: boolean;
}

export const ListingActionBtn: React.FC<LisitngActionBtnPropsType> = ({
  bgColor,
  icon: Icon,
  disabled,
}) => {
  return (
    <button
      className={classNames(
        "w-10 h-10 rounded-10 flex justify-center items-center text-2xl",
        bgColor,
        disabled ? "opacity-50" : ""
      )}
    >
      <Icon />
    </button>
  );
};
