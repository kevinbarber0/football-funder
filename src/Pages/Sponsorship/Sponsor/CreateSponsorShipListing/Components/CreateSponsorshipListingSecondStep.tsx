import React, { useContext } from "react";
import {
  AddmoreBtn,
  Button,
  FileNameCoverInput,
  Input,
  PageSectionTitle,
  PageTitle,
  PitchImageUpload,
  StepLabel,
  StepperBackButton,
} from "UI";
import { VideoURLData } from "Config";
import { StepperActionPropsType } from "types";
import { Perks } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateSponsorshipListingSecondStep: React.FC<
  StepperActionPropsType
> = ({ handleNextPage, handlePrevPage }) => {
  const {
    createSponsorshipValue,
    handleCreateSponsorshipValue,
    adsPerkArray,
    handleAddNewPerk,
    handleChangePerkValue,
    sponsorPitchImgArray,
    handleAddNewSponsorPitchImgUploadForm,
    handleChangeSponsorPitchImgValue,
    sponsorTitleImg,
    handleChangeSponsorTitleImg,
  } = useContext(FormStepperContext);
  const handlePerkAddmoreBtnClick = () => {
    handleAddNewPerk();
  };
  const handleImageAddmoreBtnClick = () => {
    handleAddNewSponsorPitchImgUploadForm();
  };

  return (
    <form onSubmit={handleNextPage}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
      >
        <PageTitle title="Create your listing" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 5" title="Add Details" />
        </div>
        <div className="xs:w-[500px]">
          <div className="mt-30">
            <PageSectionTitle
              title="Title image"
              intro="Recommended size 300x300px - this will be the first image you see on your campaign and in all listings."
            />
            <div className="mt-[15px]">
              <div className="xs:w-[500px]">
                <FileNameCoverInput
                  value={sponsorTitleImg}
                  handleChangeValue={handleChangeSponsorTitleImg}
                />
              </div>
            </div>
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Listing pitch image/video "
              intro="This will appear at the top of your fundraiser page. Select image or video - a video will really bring the listing to life."
            />
            <div className="mt-[15px]">
              <div className="flex flex-col gap-[10px]">
                {sponsorPitchImgArray.map((value, index) => {
                  return (
                    <PitchImageUpload
                      key={index}
                      index={index}
                      value={value}
                      handleChangeValue={handleChangeSponsorPitchImgValue}
                    />
                  );
                })}
                {sponsorPitchImgArray.length !== 0 && (
                  <button type="button" onClick={handleImageAddmoreBtnClick}>
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
                value={createSponsorshipValue.pitchVideoLink}
                setValue={handleCreateSponsorshipValue}
                required={false}
                disabled={false}
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Add perks"
                intro="Give your advertisers something back for providing you with financial backing. The number of rewards you can offer is unlimited."
              />

              <div className="mt-15">
                {adsPerkArray.map((value, index) => (
                  <Perks
                    key={index}
                    index={index}
                    values={value}
                    handleChangePerkValue={handleChangePerkValue}
                  />
                ))}
                {adsPerkArray.length !== 0 && (
                  <div className="mt-5">
                    <button type="button" onClick={handlePerkAddmoreBtnClick}>
                      <AddmoreBtn />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
