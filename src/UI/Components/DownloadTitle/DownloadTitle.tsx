import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

interface DownloadTitlePropsType {
  title: string;
  handleClick: (val: boolean) => void;
}

export const DownloadTitle: React.FC<DownloadTitlePropsType> = ({
  title,
  handleClick,
}) => {
  return (
    <div className="flex justify-between">
      <div className="text-sm text-green-70 font-semibold">{title}</div>
      <button
        className="flex items-center gap-[5px]"
        onClick={() => handleClick(false)}
      >
        <MdOutlineFileDownload />
        <div className="text-sm text-green-70 font-semibold">Download list</div>
      </button>
    </div>
  );
};
