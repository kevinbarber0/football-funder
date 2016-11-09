import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ColorContext } from "App/ColorProvider";

import {
  Button,
  FileUplaod,
  MyColorPicker,
  ImageCoverInput,
  Input,
  SlideBar,
  SocialMediaLink,
  StepperBackButton,
  Template,
  Textarea,
} from "UI";

import { EditProfileListTitle, SelectCard } from "./Components";

import {
  AverageAttendanceData,
  AveragePlayerAgeData,
  CapacityData,
  FoundedData,
  NameData,
  SelectFundraiserCardData,
  SelectAdvertisingCardData,
  SelectSponsorshipCardData,
  SocialMediaLinkData,
  TrophiesData,
  WebSiteURLData,
} from "Config";

import { PROFILEPAGE_URL } from "Lib/urls";

import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const [editProfileValue, setEditProfileValue] = useState<{
    [key: string]: any;
  }>({});
  const handleEditProfileValue = (key: any, value: any) => {
    setEditProfileValue({
      ...editProfileValue,
      [key]: value,
    });
  };
  const { backgroundColor, setBackgroundColor } = useContext(ColorContext)!;
  const { gradientColor, setGradientColor } = useContext(ColorContext)!;
  const { primaryColor, setPrimaryColor } = useContext(ColorContext)!;
  const { secondaryColor, setSecondaryColor } = useContext(ColorContext)!;
  const [selectedProfileImage, setSelectedProfileImage] = useState<File | null>(
    null
  );
  const [selectedCoverImage, setSelectedCoverImage] = useState<File | null>(
    null
  );
  const [socialLinkUrl, setSocialLinkUrl] = useState<string>("");
  const [selectedFundriserCards, setSelectedFundraiserCards] = useState<
    string[]
  >([""]);
  const [selectedAdvertisingCards, setSelectedAdvertisingCards] = useState<
    string[]
  >([""]);
  const [selectedSponsorshipCards, setSelectedSponsorshipCards] = useState<
    string[]
  >([""]);
  const [selectedGalleryImages, setSelectedGalleryImages] =
    useState<FileList | null>(null);
  const removeProfileImage = () => {
    setSelectedProfileImage(null);
  };
  const removeCoverImage = () => {
    setSelectedCoverImage(null);
  };
  const handleRemoveImage = (index: number): void => {
    const updatedImages = Array.from(selectedGalleryImages || []);
    updatedImages.splice(index, 1);
    const dataTransfer = new DataTransfer();
    updatedImages.forEach((file) => dataTransfer.items.add(file));
    setSelectedGalleryImages(dataTransfer.files);
  };

  return (
    <Template>
      <form>
        <div className="sm:pt-30 pt-5 xs:pb-[150px] pb-[100px]">
          <div className="lg:w-[1000px] max-lg:px-5 mx-auto">
            <div className="stepLabelTitle">Edit live profile</div>
            <div className="mt-6">
              <StepperBackButton
                handleBackPage={() => navigate(PROFILEPAGE_URL)}
              />
            </div>
            <div className="mt-30 xs:w-[500px]">
              <>
                <div className="buttonText text-green-70">Display name</div>
                <div className="mt-15">
                  <Input
                    data={NameData}
                    name="name"
                    value={editProfileValue.name}
                    setValue={handleEditProfileValue}
                    disabled={true}
                    required={true}
                  />
                </div>
              </>
              <div className="mt-30">
                <div className="buttonText text-green-70">About</div>
                <div className="mt-15">
                  <Textarea
                    name="description"
                    value={editProfileValue.description}
                    setValue={handleEditProfileValue}
                    showLeftCharacters={true}
                    height="h-[150px]"
                    limit={300}
                    title="Description"
                    titleStyle="text-[10px] leading-[14px] text-gray-10"
                    required={true}
                  />
                </div>
              </div>
              <div className="mt-30">
                <div className="buttonText text-green-70">Profile picture</div>
                <div className="mt-15">
                  <div className="w-[120px] h-[120px]">
                    <ImageCoverInput
                      onChange={setSelectedProfileImage}
                      removeImage={removeProfileImage}
                      selectedImage={selectedProfileImage}
                      coverImage={false}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div className="buttonText text-green-70">Cover image</div>
                <div className="mt-15">
                  <div className="w-full h-[160px]">
                    <ImageCoverInput
                      onChange={setSelectedCoverImage}
                      removeImage={removeCoverImage}
                      selectedImage={selectedCoverImage}
                      coverImage={true}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div className="buttonText text-green-70">Theme color</div>
                <div className="mt-15">
                  <div className="flex flex-wrap gap-2.5 w-full">
                    <div className="ns:w-[calc(50%-5px)] w-full">
                      <MyColorPicker
                        setColor={setPrimaryColor}
                        defaultColor={primaryColor}
                        labelName="Primary"
                      />
                    </div>
                    <div className="ns:w-[calc(50%-5px)] w-full">
                      <MyColorPicker
                        setColor={setSecondaryColor}
                        defaultColor={secondaryColor}
                        labelName="Secondary"
                      />
                    </div>
                    <div className="ns:w-[calc(50%-5px)] w-full">
                      <MyColorPicker
                        setColor={setBackgroundColor}
                        defaultColor={backgroundColor}
                        labelName="Background"
                      />
                    </div>
                    <div className="ns:w-[calc(50%-5px)] w-full">
                      <MyColorPicker
                        setColor={setGradientColor}
                        defaultColor={gradientColor}
                        labelName="Gradient"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div className="buttonText text-green-70">
                  Social media links
                </div>
                <div className="mt-2.5">
                  <div className="introText">
                    Add your social media links below
                  </div>
                </div>
                <div className="mt-15">
                  <div className="flex flex-col gap-2.5">
                    {SocialMediaLinkData.map((item, index) => {
                      return (
                        <SocialMediaLink
                          key={index}
                          baseUrl={item.baseUrl}
                          icon={item.icon}
                          label={item.label}
                          placeholder={item.placeholder}
                          setUrl={setSocialLinkUrl}
                          defaultUrl={socialLinkUrl}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="mt-30 flex gap-2.5 items-center darkIntroText px-15 py-2.5
            border-[1px] border-gray-200 bg-gray-20 rounded-20"
              >
                <TbInfoSquareRoundedFilled size={20} />
                <div className="flex-1">
                  You can modify the order of following sections by dragging
                  them up and down.
                </div>
              </div>
              <div className="mt-30">
                <EditProfileListTitle
                  title="Fundraiser"
                  intro="Choose your fundraiser you want to be featured on your live profile"
                />
                <div className="mt-5">
                  <div className="flex flex-col gap-2.5">
                    {SelectFundraiserCardData.map((item, index) => {
                      return (
                        <SelectCard
                          key={index}
                          image={item.image}
                          value={item.value}
                          title={item.title}
                          selectedValues={selectedFundriserCards}
                          setValues={setSelectedFundraiserCards}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <EditProfileListTitle
                  title="Advertising"
                  intro="Choose your advertise listing you want to be featured on your live profile"
                />
                <div className="mt-5">
                  <div className="flex flex-col gap-2.5">
                    {SelectAdvertisingCardData.map((item, index) => {
                      return (
                        <SelectCard
                          key={index}
                          image={item.image}
                          value={item.value}
                          title={item.title}
                          selectedValues={selectedAdvertisingCards}
                          setValues={setSelectedAdvertisingCards}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <EditProfileListTitle
                  title="Sponsorship"
                  intro="Choose your sponsorship listing you want to be featured on your live profile"
                />
                <div className="mt-5">
                  <div className="flex flex-col gap-2.5">
                    {SelectSponsorshipCardData.map((item, index) => {
                      return (
                        <SelectCard
                          key={index}
                          image={item.image}
                          value={item.value}
                          title={item.title}
                          selectedValues={selectedSponsorshipCards}
                          setValues={setSelectedSponsorshipCards}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <EditProfileListTitle
                  title="Gallery"
                  intro="Upload some photos you want to showcase on your live profile"
                />
                <div className="mt-5 z-50">
                  {selectedGalleryImages && (
                    <SlideBar>
                      {/* <div className="flex gap-2.5"> */}
                      {Array.from(selectedGalleryImages).map((file, index) => (
                        <div
                          key={index}
                          className="relative w-[160px] h-[170px]  px-[5px]"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            className="w-full h-full rounded-10 overflow-hidden"
                            alt="carouselimage"
                          />
                          <div className="absolute bottom-2.5 right-3">
                            <button
                              className="p-[5px] bg-gray-20 rounded-full"
                              onClick={() => handleRemoveImage(index)}
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>
                      ))}
                    </SlideBar>
                  )}
                </div>
                <div className="mt-30">
                  <FileUplaod
                    onChange={setSelectedGalleryImages}
                    selectedImages={selectedGalleryImages}
                  />
                </div>
              </div>
              <div className="mt-30">
                <EditProfileListTitle title="Stats" />
                <div className="mt-15 flex flex-col gap-2.5">
                  <Input
                    data={FoundedData}
                    name="funded"
                    value={editProfileValue.funded}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={TrophiesData}
                    name="trophies"
                    value={editProfileValue.trophies}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={CapacityData}
                    name="capacity"
                    value={editProfileValue.capacity}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={AverageAttendanceData}
                    name="averageAttendance"
                    value={editProfileValue.averageAttendance}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={AveragePlayerAgeData}
                    name="averagePlayerAge"
                    value={editProfileValue.averagePlayerAge}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                </div>
              </div>
              <div className="mt-30">
                <div className="buttonText text-green-70">Website link</div>
                <div className="mt-15">
                  <Input
                    data={WebSiteURLData}
                    name="website_url"
                    value={editProfileValue.website_url}
                    setValue={handleEditProfileValue}
                    required={true}
                    disabled={false}
                  />
                </div>
              </div>
            </div>
            <div className="mt-[60px] flex justify-end">
              <div className="xs:w-[250px] w-full">
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[50px]"
                  width="w-full"
                  text="Save"
                  textColor="text-green-70"
                  textSize="buttonText"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
