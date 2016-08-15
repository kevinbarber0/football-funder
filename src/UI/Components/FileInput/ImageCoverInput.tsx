import React from "react";

import classNames from "classnames";

import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";

interface FileInputProps {
  onChange: (file: File | null) => void;
  selectedImage: File | null;
  removeImage: () => void;
  coverImage: boolean;
}

export const ImageCoverInput: React.FC<FileInputProps> = ({
  onChange,
  selectedImage,
  removeImage,
  coverImage,
}) => {
  // const [buttonName, setButtonName] = useState<string>("Upload image");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const seletedFile = fileList[0];
      onChange(seletedFile);
      // setButtonName(seletedFile.name);
    } else {
      onChange(null);
    }
  };

  return (
    <div className="relative w-full h-full">
      <button
        className={classNames(
          "bg-white text-green-70 w-full h-full  text-[14px] flex items-center justify-center",
          "leading-[20px] rounded-30 border-2 border-gray-200 font-semibold"
        )}
      >
        <div
          className={classNames(
            "flex flex-col items-center",
            selectedImage && "hidden"
          )}
        >
          <MdOutlineFileUpload size={24} />
          <div>Upload</div>
        </div>
        {selectedImage && (
          <>
            {coverImage ? (
              <div className="relative w-full h-full">
                <div className="w-full h-full overflow-hidden rounded-30">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="uplaodedimage"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="absolute bottom-[15px] right-[15px]"
                  onClick={removeImage}
                >
                  <div className="rounded-full bg-white p-2.5">
                    <RiDeleteBinLine size={16} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <div className="w-full h-full overflow-hidden rounded-30">
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="uplaodedimage"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className="absolute -bottom-2.5 -right-2.5"
                  onClick={removeImage}
                >
                  <div className="rounded-full bg-gray-300 p-2.5">
                    <RiDeleteBinLine size={16} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </button>
      {!selectedImage && (
        <input
          className="absolute top-0 cursor-pointer block h-full w-full opacity-0"
          type="file"
          name="documents[]"
          accept="image/*"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
};
