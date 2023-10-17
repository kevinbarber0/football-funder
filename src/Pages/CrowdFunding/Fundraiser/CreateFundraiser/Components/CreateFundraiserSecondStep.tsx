import React, { useContext } from "react";
import {
  Button,
  FileNameCoverInput,
  PitchImageUpload,
  Input,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  StepperBackButton,
  Textarea,
  AddmoreBtn,
} from "UI";
import { VideoURLData } from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateFundraiserSecondStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const {
    createFundraiserValue,
    handleCreateFundraiserValue,
    fundPitchImgArray,
    handleChangeFundPitchImgValue,
    handleAddNewFundPitchImgUploadForm,
    fundTitleImg,
    handleChangeFundTitleImg,
  } = useContext(FormStepperContext);
  const handleAddmoreBtnClick = () => {
    handleAddNewFundPitchImgUploadForm();
  };
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNextPage();
  };
  return (
    <form onSubmit={handleClick}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
      >
        <PageTitle title="Create your fundraiser" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 2" title="Add Details" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle
              title="About the fundraiser"
              intro="Give a detailed description of your fundraiser."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <Textarea
                name="about"
                title="Description"
                value={createFundraiserValue.about}
                setValue={handleCreateFundraiserValue}
                height="ns:h-[350px] vs:h-[390px] "
                showLeftCharacters={false}
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                required={true}
              />
            </div>
          </div>

          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser title image"
              intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
            />
            <div className="mt-[15px]">
              <div className="xs:w-[500px]">
                <FileNameCoverInput
                  value={fundTitleImg}
                  handleChangeValue={handleChangeFundTitleImg}
                />
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser pitch image/video"
              intro="This will appear at the top of your fundraiser page. Select image or video - a video will really bring the listing to life."
            />
            <div className="mt-[15px]">
              <div className="flex flex-col gap-[10px]">
                {fundPitchImgArray.map((value, index) => {
                  return (
                    <PitchImageUpload
                      key={index}
                      index={index}
                      value={value}
                      handleChangeValue={handleChangeFundPitchImgValue}
                    />
                  );
                })}
                {fundPitchImgArray.length !== 0 &&
                  fundPitchImgArray !== null && (
                    <button type="button" onClick={handleAddmoreBtnClick}>
                      <AddmoreBtn />
                    </button>
                  )}

                <Button
                  backgroundColor="bg-green-10"
                  textColor="text-black"
                  textSize="text-[14px] leading-5 font-semibold"
                  height="h-[54px]"
                  width="w-full"
                  text="Video"
                />
              </div>
            </div>
            <div className="mt-[15px] xs:w-[500px] w-full">
              <Input
                data={VideoURLData}
                name="pitchVideoLink"
                value={createFundraiserValue.pitchVideoLink}
                setValue={handleCreateFundraiserValue}
                required={false}
                disabled={false}
              />
            </div>
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
