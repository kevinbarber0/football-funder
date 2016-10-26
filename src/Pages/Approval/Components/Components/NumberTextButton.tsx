import { MdKeyboardArrowUp } from "react-icons/md";

interface NumberTextButtonProps {
  currentValue: number | undefined;
  onUpBtnClick: () => void;
  onDownBtnClick: () => void;
}

export const NumberTextButton = ({
  currentValue,
  onUpBtnClick,
  onDownBtnClick,
}: NumberTextButtonProps) => {
  return (
    <>
      {currentValue === 0 ? (
        <div className="p-15 max-w-[120px] darkIntroText">N/A</div>
      ) : (
        <div className="border rounded-10 border-gray-30 p-15 flex justify-between items-center max-w-[120px]">
          <div className="text-base font-normal text-green-70">
            {currentValue}%
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className="h-2.5 text-xs leading-none"
              onClick={onUpBtnClick}
            >
              <MdKeyboardArrowUp />
            </button>
            <button
              className="h-2.5 text-xs leading-none rotate-180"
              onClick={onDownBtnClick}
            >
              <MdKeyboardArrowUp />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
