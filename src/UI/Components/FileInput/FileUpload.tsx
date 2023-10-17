import React from "react";
import classNames from "classnames";
import { AiOutlinePaperClip } from "react-icons/ai";

interface FileInputProps {
  onChange: (fileList: FileList | null) => void;
  selectedImages: FileList | null;
}

export const FileUplaod: React.FC<FileInputProps> = ({
  onChange,
  selectedImages,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      // const seletedFile = fileList[0];
      const updatedFileList = selectedImages
        ? [...Array.from(selectedImages), ...Array.from(fileList)]
        : Array.from(fileList);
      const updatedFiles = new DataTransfer();
      updatedFileList.forEach((file) => {
        updatedFiles.items.add(file);
      });

      onChange(updatedFiles.files);
    } else {
      onChange(null);
    }
  };

  return (
    <div className="overflow-hidden relative w-full">
      <button
        className={classNames(
          "bg-white text-green-70  text-[14px] flex justify-center items-center",
          "leading-[20px] h-[54px] rounded-10 border-2 border-gray-200 font-semibold py-2 px-4 w-full"
        )}
      >
        <div className="flex items-center gap-1">
          <div className="text-[16px] rotate-180">
            <AiOutlinePaperClip />
          </div>
          Upload image
        </div>
      </button>
      <input
        className="absolute top-0 cursor-pointer block h-[54px] w-full opacity-0"
        type="file"
        name="documents[]"
        accept="image/*"
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
};
