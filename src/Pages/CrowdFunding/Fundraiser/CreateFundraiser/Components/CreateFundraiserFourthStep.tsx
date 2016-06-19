import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useAxios } from "Lib";
import dayjs from "dayjs";
import {
  Button,
  DatePicker,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  AmountShow,
  StepLabel,
  StepperBackButton,
  Textarea,
  ConfirmBox,
} from "UI";
import { AvailableNumberData, DeliveryData, DispatchDateData } from "Config";
import { FormStepperContext } from "App/FormStepperProvider";
import { StepperActionPropsType } from "types";
import { useMutation } from "react-query";
import { StatusContext } from "App/StatusProvider";
import { setReward } from "Data/Reward";
export const CreateFundraiserFourthStep: React.FC<StepperActionPropsType> = ({
  handlePrevPage,
  handleNextPage,
}) => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const { showStatus } = useContext(StatusContext);
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({
    limit: false,
  });
  const handleConfirm = (key: string, value: boolean) => {
    setConfirm({
      ...confirm,
      [key]: !value,
    });
  };
  const { handleRewardIdArray } = useContext(FormStepperContext);

  const [rewardValue, setRewardValue] = useState<{
    [key: string]: any;
  }>({
    title: "",
    amount: "",
    description: "",
    delivery: 0,
    availableNumber: "",
    about: "",
    dispatchDate: "",
  });
  const handleRewardValue = (key: string, value: any) => {
    setRewardValue({
      ...rewardValue,
      [key]: value,
    });
  };
  //  back-end
  const rewardData: any = {
    title: rewardValue.title,
    amount: rewardValue.amount,
    description: rewardValue.description,
    delivery: rewardValue.delivery === 1 ? true : false,
    availableNumber: parseInt(rewardValue.availableNumber),
    unlimited: confirm.limit,
    about: rewardValue.about,
    dispatchDate: dayjs(rewardValue.dispatch_date).format("YYYY-MM-DD"),
  };

  const { mutate: addReward } = useMutation(
    (params: any) => axios.post("/fundraiser/createReward", params),
    {
      onSuccess: (res) => {
        showStatus("Your reward has been successfully added!");
        const rewardData = res.data.data;
        dispatch(setReward(rewardData));
        handleRewardIdArray(rewardData.id);
        // console.log("rewardArray", rewardData.id, rewardIdArray);
        handleNextPage();
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const handleBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    addReward(rewardData);

 

  };

  return (
    <form onSubmit={handleBtnClick}>
      <div className="w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5 mb-[90px] max-ns:mb-30 mx-auto">
        <div className="flex  justify-between items-center">
          <PageTitle title="Create your fundraiser" />
          <button className="max-sm:hidden generalSmallText text-green-70">
            Skip adding rewards
          </button>
        </div>
        <div className="mt-15 flex justify-between items-center">
          <StepperBackButton handleBackPage={handlePrevPage} />
          <button className="sm:hidden generalSmallText text-green-70">
            Skip adding rewards
          </button>
        </div>
        <div className="mt-30 ">
          <StepLabel number="Step 4" title="Add rewards" />
        </div>
        <div className="mt-30">
          <PageSectionTitle intro="Give your supporters something back by offering rewards for a certain donation amount. The number of rewards you can offer is unlimited." />
        </div>
        <div className="mt-30 xs:w-[500px] flex flex-col gap-30">
          <div>
            <PageSectionTitle title="Reward title" />
            <div className="mt-15">
              <Textarea
                name="title"
                value={rewardValue.title}
                setValue={handleRewardValue}
                title="Reward title"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                limit={150}
                height="h-[80px]"
                showLeftCharacters={true}
                required={true}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="Donation amount to qualify" />
            <div className="mt-15">
              <AmountShow
                name="amount"
                value={rewardValue.amount}
                setValue={handleRewardValue}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="Reward description" />
            <div className="mt-[15px]">
              <Textarea
                name="description"
                value={rewardValue.description}
                setValue={handleRewardValue}
                title="Short description"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                limit={150}
                height="h-[150px]"
                showLeftCharacters={true}
                required={true}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle title="How many are available?" />
            <div className="mt-15 flex gap-30">
              <Input
                data={AvailableNumberData}
                name="availableNumber"
                value={rewardValue.availableNumber}
                setValue={handleRewardValue}
                required={false}
                disabled={false}
              />
              <ConfirmBox
                name="limit"
                label="Unlimited"
                checkboxStyle={true}
                value={confirm.limit}
                setValue={handleConfirm}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Additional info (optional)"
              intro="Use this section for any unique information about the reward."
            />
            <div className="mt-15">
              <Textarea
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                height="h-[350px] max-ns:h-[390px] "
                showLeftCharacters={false}
                name="about"
                value={rewardValue.about}
                setValue={handleRewardValue}
                title="Description"
                required={false}
              />
            </div>
          </div>
          <div className="">
            <PageSectionTitle
              title="Delivery"
              intro="Does this reward require delivery?"
            />
            <div className="mt-15">
              <RadioButtonList
                name="delivery"
                value={rewardValue.delivery}
                setValue={handleRewardValue}
                options={DeliveryData}
                classes="flex gap-30"
                textStyle="text-base"
                checkboxStyle={false}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Estimated dispatch date"
              intro="When can a support expect their reward to be sent?"
            />
            <div className="mt-15">
              <DatePicker
                data={DispatchDateData}
                name="dispatch_date"
                value={rewardValue.dispatch_date}
                setValue={handleRewardValue}
                required={true}
              />
            </div>
          </div>
          <div>
            <Button
              backgroundColor="bg-green-70"
              height="h-[50px]"
              width="w-full"
              textColor="text-white"
              textSize="text-[16px] leading-[20px] font-semibold"
              text="Add another reward"
            />
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Save Reward"
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
