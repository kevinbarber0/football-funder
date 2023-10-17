import React, { useContext, useState } from "react";
import {
  CreateFundraiserFinalPage,
  CreateFundraiserFirstStep,
  CreateFundraiserFivethStep,
  CreateFundraiserSecondStep,
  CreateFundraiserThirdStep,
  CreateFundraiserFourthStep,
  CreateFundraiserSixthStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { useMutation } from "react-query";
import { StatusContext } from "App/StatusProvider";
import { useAxios } from "Lib";
import { useSelector } from "react-redux";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateFundraiser: React.FC = () => {
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const { userInfo } = useSelector((state: any) => state.user);
  const {
    createFundraiserValue,
    isLoading,
    rewardIdArray,
    fundPitchImgArray,
    fundTitleImg,
    fundOverlayImg,
    clearCreateFundraiserValue,
    clearfundTitleImgValue,
    clearFundPitchImgArrayValue,
    clearfundOverlayImgValue,
    clearRewardIdArrayValue,
  } = useContext(FormStepperContext);

  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const data: any = {
    user_id: userInfo.id,
    title: createFundraiserValue.title,
    description: createFundraiserValue.description,
    amount: createFundraiserValue.amount,
    about: createFundraiserValue.about,
    titleImgLink: fundTitleImg.img_url,
    titleImgName: fundTitleImg.name,
    pitchImages: fundPitchImgArray,
    pitchVideoLink: createFundraiserValue.pitchVideoLink,
    // pitchVideoName: createFundraiserValue.pitchVideoName,
    overlayImgLink: fundOverlayImg.img_url,
    overlayImgName: fundOverlayImg.name,
    promote: createFundraiserValue.promote,
    reward_ids: rewardIdArray,
  };

  const createFundraiser = useMutation(
    (params: any) => axios.post("/fundraiser/create", params),
    {
      onSuccess: (data) => {
        clearCreateFundraiserValue();
        clearfundTitleImgValue();
        clearFundPitchImgArrayValue();
        clearfundOverlayImgValue();
        clearRewardIdArrayValue();
        showStatus("Your fundraiser has been succesfully created!");
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      onError: (err: any) => {
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
    if (currentStep === 5) {
      // console.log("1231231", data);
      createFundraiser.mutate(data);
    } else if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleNextPartPage() {
    if (currentStep < pages.length - 3) {
      setCurrentStep(currentStep + 3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handledDoublePrevPage() {
    if (currentStep > 2) {
      setCurrentStep(currentStep - 3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "CreateFundraiserFirstStep",
      component: (
        <CreateFundraiserFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserSecondStep",
      component: (
        <CreateFundraiserSecondStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserThirdStep",
      component: (
        <CreateFundraiserThirdStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleNextPartPage={handleNextPartPage}
        />
      ),
    },
    {
      name: "CreateFundraiserFourthStep",
      component: (
        <CreateFundraiserFourthStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserFivethStep",
      component: (
        <CreateFundraiserFivethStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CreateFundraiserSixthStep",
      component: (
        <CreateFundraiserSixthStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleDoublePrevPage={handledDoublePrevPage}
        />
      ),
    },

    {
      name: "CreateFundraiserFinalPage",
      component: <CreateFundraiserFinalPage />,
    },
  ];

  return (
    <Template isLoading={createFundraiser.isLoading || isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
