import React, { useState, useContext } from "react";
import {
  CreateAdsListingFinalPage,
  CreateAdsListingFirstStep,
  CreateAdsListingSecondStep,
  CreateAdsListingThirdStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";
import { useSelector } from "react-redux";
import { useAxios } from "Lib";
import { StatusContext } from "App/StatusProvider";
import { useMutation } from "react-query";
import dayjs from "dayjs";

export const CreateAdsListing: React.FC = () => {
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const { userInfo } = useSelector((state: any) => state.user);
  const {
    isLoading,
    createAdvertisingValue,
    adsPerkArray,
    adsPitchImgArray,
    adsTitleImg,
    clearCreateAdvertisingValue,
    clearAdsPerkArray,
    clearAdsPitchImgArrayValue,
    clearAdsTitleImgValue,
  } = useContext(FormStepperContext);
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const data: any = {
    user_id: userInfo.id,
    title: createAdvertisingValue.title,
    amount: createAdvertisingValue.amount,
    vat_fee: createAdvertisingValue.vat_fee ? true : false,
    sPeriodDate: dayjs(createAdvertisingValue.sPeriodDate).format("YYYY-MM-DD"),
    lPeriodDate: dayjs(createAdvertisingValue.lPeriodDate).format("YYYY-MM-DD"),
    commencementDate: dayjs(createAdvertisingValue.commencementDate).format(
      "YYYY-MM-DD"
    ),
    description: createAdvertisingValue.description,
    adsNumber: parseInt(createAdvertisingValue.adsNumber),
    titleImgLink: adsTitleImg.img_url,
    titleImgName: adsTitleImg.name,
    pitchImages: adsPitchImgArray,
    pitchVideoLink: createAdvertisingValue.pitchVideoLink,
    // pitchVideoName: inputValue.ads_video_url,
    promote: createAdvertisingValue.promote,
    perks: adsPerkArray,
  };
  const createAdvertising = useMutation(
    (params: any) => axios.post("/advertising/create", params),
    {
      onSuccess: (data) => {
        clearCreateAdvertisingValue();
        clearAdsPerkArray();
        clearAdsPitchImgArrayValue();
        clearAdsTitleImgValue();
        showStatus("Your advertising lisitng has been successfully created!");
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (err: any) => {
        console.log(data);
        console.log(err);
        // if (err.errors) {
        //   window.scrollTo(0, 0);
        //   const responseError = err.errors;
        //   if (
        //     responseError[0].rule === "unique" &&
        //     responseError[0].field === "email"
        //   ) {
        //     showStatus("Username already exists", "error");
        //   } else showStatus(responseError[0].message, "error");
        // } else {
        //   showStatus(err.message, "error");
        // }
      },
    }
  );

  function handleNextPage() {
    if (currentStep === 2) {
      createAdvertising.mutate(data);
      // console.log("123123123", data);
    } else if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "CreateAdsListingFirstStep",
      component: (
        <CreateAdsListingFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingSecondStep",
      component: (
        <CreateAdsListingSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateAdsListingThirdStep",
      component: (
        <CreateAdsListingThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },

    {
      name: "OrganisationAdvertisingFinalPage",
      component: <CreateAdsListingFinalPage />,
    },
  ];

  return (
    <Template isLoading={createAdvertising.isLoading || isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
