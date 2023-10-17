import React, { createContext, useState } from "react";
import { ContactPhoneNumberData } from "Config";
// import { useSelector } from "react-redux";
// import { UserStateType } from "Data/User";

interface Perk {
  title: string;
  description: string;
}
interface uploadImage {
  name: string;
  img_url: string;
}

interface FormStepperContextProps {
  // register value context
  registerBaseValue: any;
  registerValue: { [key: string]: any };
  handleRegisterValue: (key: string, value: any) => void;
  fundraierRegisterValue: { [key: string]: any };
  handleFundraiserRegisterValue: (key: string, value: any) => void;
  advertisingRegisterValue: { [key: string]: any };
  handleAdvertisingRegisterValue: (key: string, value: any) => void;
  sponsorshipRegisterValue: { [key: string]: any };
  handleSponsorshipRegisterValue: (key: string, value: any) => void;
  // create list context
  createFundraiserValue: { [key: string]: any };
  handleCreateFundraiserValue: (key: string, value: any) => void;
  handleCreateFundraiserPromote: (value: any) => void;
  rewardIdArray: any;
  handleRewardIdArray: (value: any) => void;
  createAdvertisingValue: { [key: string]: any };
  handleCreateAdvertisingValue: (key: string, value: any) => void;
  handleCreateAdvertisingPromote: (value: any) => void;
  createSponsorshipValue: { [key: string]: any };
  handleCreateSponsorshipValue: (key: string, value: any) => void;
  handleCreateSponsorshipPromote: (value: any) => void;
  // update password context
  updatePasswordValue: { [key: string]: any };
  handleUpdatePasswordValue: (key: string, value: any) => void;
  // forgot password value context
  forgotPasswordValue: { [key: string]: any };
  handleForgotPasswordValue: (key: string, value: any) => void;
  // account update value context
  fundraiserAccountUpdateValue: { [key: string]: any };
  handleFundraiserAccountUpdateValue: (key: string, value: any) => void;
  advertisingAccountUpdateValue: { [key: string]: any };
  handleAdvertisingAccountUpdateValue: (key: string, value: any) => void;
  sponsorshipAccountUpdateValue: { [key: string]: any };
  handleSponsorshipAccountUpdateValue: (key: string, value: any) => void;
  //  isLoading context
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  // button click context
  isClickedAddrewardBtn: boolean;
  handleClickAddrewardBtn: () => void;
  handleClickNoAddrewardBtn: () => void;

  // perk context
  adsPerkArray: Perk[];
  handleChangePerkValue: (keyword: string, index: number, value: any) => void;
  handleAddNewPerk: () => void;
  clearAdsPerkArray: () => void;
  // upload pitchImage context
  fundPitchImgArray: uploadImage[];
  handleChangeFundPitchImgValue: (index: number, value: any) => void;
  handleAddNewFundPitchImgUploadForm: () => void;
  adsPitchImgArray: uploadImage[];
  handleChangeAdsPitchImgValue: (index: number, value: any) => void;
  handleAddNewAdsPitchImgUploadForm: () => void;
  sponsorPitchImgArray: uploadImage[];
  handleChangeSponsorPitchImgValue: (index: number, value: any) => void;
  handleAddNewSponsorPitchImgUploadForm: () => void;

  // fundraiser donate
  donateValue: { [key: string]: any };
  handleDonateValue: (key: string, value: any) => void;
  // ads sale
  adsSaleValue: { [key: string]: any };
  handleAdsSaleValue: (key: string, value: any) => void;
  // sponsorship sale
  sponsorshipSaleValue: { [key: string]: any };
  handleSponsorshipSaleValue: (key: string, value: any) => void;
  // checkout
  checkoutValue: { [key: string]: any };
  handleCheckoutValue: (key: string, value: any) => void;
  // agreement
  buyerValue: { [key: string]: any };
  handleBuyerValue: (key: string, value: any) => void;
  sellerValue: { [key: string]: any };
  handleSellerValue: (key: string, value: any) => void;
  //
  fundTitleImg: any;
  handleChangeFundTitleImg: (value: any) => void;
  fundOverlayImg: any;
  handleChangeFundOverlayImg: (value: any) => void;
  adsTitleImg: any;
  handleChangeAdsTitleImg: (value: any) => void;
  sponsorTitleImg: any;
  handleChangeSponsorTitleImg: (value: any) => void;
  clearRegisterValue: () => void;
  clearFundraiserRegisterValue: () => void;
  clearAdsRegisterValue: () => void;
  clearSponsorRegisterValue: () => void;
  clearUpdatePasswordValue: () => void;
  clearFundraiserUpdateValue: () => void;
  clearAdsUpdateValue: () => void;
  clearSponsorUpdateValue: () => void;
  clearForgotPasswordValue: () => void;
  clearCreateFundraiserValue: () => void;
  clearfundTitleImgValue: () => void;
  clearfundOverlayImgValue: () => void;
  clearAdsTitleImgValue: () => void;
  clearSponsorTitleImgValue: () => void;
  clearCreateAdvertisingValue: () => void;
  clearCreateSponsorshipValue: () => void;
  clearFundPitchImgArrayValue: () => void;
  clearAdsPitchImgArrayValue: () => void;
  clearSponsorPitchImgArrayValue: () => void;
  clearRewardIdArrayValue: () => void;
}

interface FormStepperPropsType {
  children: React.ReactNode;
}

const placeholder = {} as FormStepperContextProps;
export const FormStepperContext =
  createContext<FormStepperContextProps>(placeholder);

export const FormStepperProvider: React.FC<FormStepperPropsType> = ({
  children,
}) => {
  // const { userInfo }: { userInfo: UserStateType } = useSelector(
  //   (state: any) => state.user
  // );

  // const { organization } = userInfo;

  // const [inputValue, setinputValue] = useState<{
  //   [key: string]: string | null;
  // }>({
  //   category_id: userInfo.category_id.toString(),
  //   org_name: organization?.name || "",
  //   org_address_line1: organization?.address1 || "",
  //   org_address_line2: organization?.address2 || "",
  //   org_phone_number: organization?.phone_number || "",
  //   org_city: organization?.city || "",
  //   org_country: organization?.country || "",
  //   org_post_code: organization?.post_code || "",
  //   address_line1: userInfo?.address_line1 || "",
  //   address_line2: userInfo?.address_line2 || "",
  //   city: userInfo?.city || "",
  //   post_code: userInfo?.post_code || "",
  //   country: userInfo?.country || "",
  //   phone_number: userInfo?.phone_number || "",
  //   first_name: userInfo?.first_name || "",
  //   last_name: userInfo?.last_name || "",
  //   email: userInfo?.email || "",
  //   password: "",
  // });

  // useEffect(() => {
  //   setinputValue((preValue) => ({
  //     ...preValue,
  //     category_id: userInfo.category_id.toString(),
  //     org_name: organization?.name || "",
  //     org_address1: organization?.address1 || "",
  //     org_address2: organization?.address2 || "",
  //     org_phone_number: organization?.phone_number || "",
  //     org_city: organization?.city || "",
  //     org_country: organization?.country || "",
  //     org_post_code: organization?.post_code || "",
  //     address_line1: userInfo?.address_line1 || "",
  //     address_line2: userInfo?.address_line2 || "",
  //     city: userInfo?.city || "",
  //     post_code: userInfo?.post_code || "",
  //     country: userInfo?.country || "",
  //     phone_number: userInfo?.phone_number || "",
  //     first_name: userInfo?.first_name || "",
  //     last_name: userInfo?.last_name || "",
  //     email: userInfo?.email || "",
  //     profile_url: userInfo?.profile_url || "",
  //   }));
  // }, [userInfo, organization]);

  // const userId = fundraiserinputValue.user_id;

  // const handleUpdateFundraiserinputValue = (key: string, value: any) => {
  //   setfundraiserinputValue({
  //     ...fundraiserinputValue,
  //     [key]: value,
  //   });
  // };

  //  register context
  const loginBaseValue = {
    email: "",
    password: "",
  };
  const registerBaseValue = {
    ...loginBaseValue,
    category_id: 1,
    nation: 1,
    org_name: "",
    org_address1: "",
    org_address2: "",
    org_phone_number: "",
    org_pn_country: ContactPhoneNumberData[0].country,
    org_city: "",
    org_country: "",
    org_post_code: "",
    first_name: "",
    last_name: "",
    address_line1: "",
    address_line2: "",
    city: "",
    post_code: "",
    country: "",
    phone_number: "",
    pn_country: ContactPhoneNumberData[0].country,
    confirm_password: "",
    profile_url: "",
    birth_date: "",
  };
  const [registerValue, setRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
    email_communication: 1,
  });

  const handleRegisterValue = (key: string, value: any) => {
    setRegisterValue({
      ...registerValue,
      [key]: value,
    });
  };
  const clearRegisterValue = () => {
    setRegisterValue({ ...registerBaseValue });
  };

  const [fundraierRegisterValue, setFundraiserRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleFundraiserRegisterValue = (key: string, value: any) => {
    setFundraiserRegisterValue({
      ...fundraierRegisterValue,
      [key]: value,
    });
  };

  const clearFundraiserRegisterValue = () => {
    setFundraiserRegisterValue({ ...registerBaseValue });
  };

  const [advertisingRegisterValue, setAdvetisingRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleAdvertisingRegisterValue = (key: string, value: any) => {
    setAdvetisingRegisterValue({
      ...advertisingRegisterValue,
      [key]: value,
    });
  };

  const clearAdsRegisterValue = () => {
    setAdvetisingRegisterValue({ ...registerBaseValue });
  };
  const [sponsorshipRegisterValue, setSponsorshipRegisterValue] = useState<{
    [key: string]: any;
  }>({
    ...registerBaseValue,
  });
  const handleSponsorshipRegisterValue = (key: string, value: any) => {
    setSponsorshipRegisterValue({
      ...sponsorshipRegisterValue,
      [key]: value,
    });
  };

  const clearSponsorRegisterValue = () => {
    setSponsorshipRegisterValue({ ...registerBaseValue });
  };

  // update password context
  const [updatePasswordValue, setUpdatePasswordValue] = useState<{}>({
    password: "",
    email: "",
    new_password: "",
    confirm_password: "",
  });
  const handleUpdatePasswordValue = (key: string, value: any) => {
    setUpdatePasswordValue({
      ...updatePasswordValue,
      [key]: value,
    });
  };

  const clearUpdatePasswordValue = () => {
    setUpdatePasswordValue({
      password: "",
      email: "",
      new_password: "",
      confirm_password: "",
    });
  };
  // account update context
  const [fundraiserAccountUpdateValue, setFundraiserAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleFundraiserAccountUpdateValue = (key: string, value: any) => {
    setFundraiserAccountUpdateValue({
      ...fundraiserAccountUpdateValue,
      [key]: value,
    });
  };

  const clearFundraiserUpdateValue = () => {
    setFundraiserAccountUpdateValue({
      ...registerBaseValue,
    });
  };
  const [advertisingAccountUpdateValue, setAdvertisingAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleAdvertisingAccountUpdateValue = (key: string, value: any) => {
    setAdvertisingAccountUpdateValue({
      ...advertisingAccountUpdateValue,
      [key]: value,
    });
  };

  const clearAdsUpdateValue = () => {
    setAdvertisingAccountUpdateValue({
      ...registerBaseValue,
    });
  };
  const [sponsorshipAccountUpdateValue, setSponsorshipAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      ...registerBaseValue,
    });
  const handleSponsorshipAccountUpdateValue = (key: string, value: any) => {
    setSponsorshipAccountUpdateValue({
      ...sponsorshipAccountUpdateValue,
      [key]: value,
    });
  };

  const clearSponsorUpdateValue = () => {
    setSponsorshipAccountUpdateValue({
      ...registerBaseValue,
    });
  };
  // forgot password context
  const [forgotPasswordValue, setForgotPasswordValue] = useState<{
    [key: string]: any;
  }>({
    email: "",
  });
  const handleForgotPasswordValue = (key: string, value: any) => {
    setForgotPasswordValue({
      ...forgotPasswordValue,
      [key]: value,
    });
  };

  const clearForgotPasswordValue = () => {
    setForgotPasswordValue({
      email: "",
    });
  };
  //  create list context
  const listBaseValue = {
    title: "",
    description: "",
    amount: "",
    pitchVideoLink: "",
    pitchVideoName: "",
    promote: false,
  };
  const otherBaseValue = {
    ...listBaseValue,
    vat_fee: 1,
    sPeriodDate: "",
    lPeriodDate: "",
    commencementDate: "",
    perks: "",
  };
  const [createFundraiserValue, setCreateFundraiserValue] = useState<{
    [key: string]: any;
  }>({
    ...listBaseValue,
    about: "",
    reward_ids: "",
  });

  const handleCreateFundraiserValue = (key: string, value: any) => {
    setCreateFundraiserValue({
      ...createFundraiserValue,
      [key]: value,
    });
  };
  const clearCreateFundraiserValue = () => {
    setCreateFundraiserValue({
      ...listBaseValue,
      about: "",
      reward_ids: "",
    });
  };

  const [fundTitleImg, setFundTitleImg] = useState<uploadImage>({
    name: "",
    img_url: "",
  });

  const handleChangeFundTitleImg = (value: any) => {
    let tempPitchImgArray = value;
    setFundTitleImg(tempPitchImgArray);
  };
  const clearfundTitleImgValue = () => {
    setFundTitleImg({
      name: "",
      img_url: "",
    });
  };
  const [fundOverlayImg, setFundOverlayImg] = useState<uploadImage>({
    name: "",
    img_url: "",
  });

  const clearfundOverlayImgValue = () => {
    setFundOverlayImg({
      name: "",
      img_url: "",
    });
  };

  const handleChangeFundOverlayImg = (value: any) => {
    let tempPitchImgArray = value;
    setFundOverlayImg(tempPitchImgArray);
  };
  const [adsTitleImg, setAdsTitleImg] = useState<uploadImage>({
    name: "",
    img_url: "",
  });

  const handleChangeAdsTitleImg = (value: any) => {
    let tempPitchImgArray = value;
    setAdsTitleImg(tempPitchImgArray);
  };

  const clearAdsTitleImgValue = () => {
    setAdsTitleImg({
      name: "",
      img_url: "",
    });
  };

  const [sponsorTitleImg, setSponsorTitleImg] = useState<uploadImage>({
    name: "",
    img_url: "",
  });

  const handleChangeSponsorTitleImg = (value: any) => {
    let tempPitchImgArray = value;
    setSponsorTitleImg(tempPitchImgArray);
  };

  const clearSponsorTitleImgValue = () => {
    setSponsorTitleImg({
      name: "",
      img_url: "",
    });
  };

  const handleCreateFundraiserPromote = () => {
    setCreateFundraiserValue({
      ...createFundraiserValue,
      promote: !createFundraiserValue.promote,
    });
  };
  const [rewardIdArray, setRewardIdArray] = useState<any>([]);
  const handleRewardIdArray = (rewardID: any) => {
    setRewardIdArray((preValue: any) => [...preValue, rewardID]);
    handleCreateFundraiserValue("reward_ids", rewardIdArray);
  };
  const clearRewardIdArrayValue = () => {
    setRewardIdArray([]);
  };

  const [createAdvertisingValue, setCreateAdvertisingValue] = useState<{
    [key: string]: any;
  }>({
    ...otherBaseValue,
    adsNumber: "",
  });
  const handleCreateAdvertisingValue = (key: string, value: any) => {
    setCreateAdvertisingValue({
      ...createAdvertisingValue,
      [key]: value,
    });
  };
  const clearCreateAdvertisingValue = () => {
    setCreateAdvertisingValue({
      ...otherBaseValue,
      adsNumber: "",
    });
  };
  const handleCreateAdvertisingPromote = () => {
    setCreateAdvertisingValue({
      ...createAdvertisingValue,
      promote: !createAdvertisingValue.promote,
    });
  };
  const [createSponsorshipValue, setCreateSponsorshipValue] = useState<{
    [key: string]: any;
  }>({
    ...otherBaseValue,
  });

  const handleCreateSponsorshipValue = (key: string, value: any) => {
    setCreateSponsorshipValue({
      ...createSponsorshipValue,
      [key]: value,
    });
  };

  const clearCreateSponsorshipValue = () => {
    setCreateSponsorshipValue({
      ...otherBaseValue,
    });
  };
  const handleCreateSponsorshipPromote = () => {
    setCreateSponsorshipValue({
      ...createSponsorshipValue,
      promote: !createSponsorshipValue.promote,
    });
  };

  // fundraiser donate
  const [donateValue, setDonateValue] = useState<{ [key: string]: any }>({
    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleDonateValue = (key: string, value: any) => {
    setDonateValue({
      ...donateValue,
      [key]: value,
    });
  };

  // advertising sale
  const [adsSaleValue, setAdsSaleValue] = useState<{ [key: string]: any }>({
    full_name: "",
    org_name: "",

    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleAdsSaleValue = (key: string, value: any) => {
    setAdsSaleValue({
      ...adsSaleValue,
      [key]: value,
    });
  };
  // sponsorship sale
  const [sponsorshipSaleValue, setSponsorshipSaleValue] = useState<{
    [key: string]: any;
  }>({
    full_name: "",
    org_name: "",

    first_name: "",
    last_name: "",
    birth_date: "",
    phone_number: "",
    post_code: "",
    address: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
    donation_amount: "",
    amount: "",
    anonymous: 1,
    comment: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
  });
  const handleSponsorshipSaleValue = (key: string, value: any) => {
    setSponsorshipSaleValue({
      ...sponsorshipSaleValue,
      [key]: value,
    });
  };
  // checkout
  const [checkoutValue, setCheckoutValue] = useState<{ [key: string]: any }>({
    fist_name: "",
    last_name: "",
    phone_numebr: "",
    address: "",
    country: "",
    payment_method: 1,
    card_number: "",
    expiry: "",
    cvc: "",
    post_code: "",
  });
  const handleCheckoutValue = (key: string, value: any) => {
    setCheckoutValue({
      ...checkoutValue,
      [key]: value,
    });
  };
  // agreement
  const [buyerValue, setBuyerValue] = useState<{ [key: string]: any }>({
    payment_method: "",
    card_number: "",
    expiry: "",
    cvc: "",
    post_code: "",
    name: "",
    post_code1: "",
    address1: "",
    country1: "",
    post_code2: "",
    address2: "",
    country2: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const handleBuyerValue = (key: string, value: any) => {
    setBuyerValue({
      ...buyerValue,
      [key]: value,
    });
  };

  const [sellerValue, setSellerValue] = useState<{ [key: string]: any }>({
    name: "",
    post_code: "",
    address_line1: "",
    country1: "",
    post_code2: "",
    address_line2: "",
    country2: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
  });
  const handleSellerValue = (key: string, value: any) => {
    setSellerValue({
      ...sellerValue,
      [key]: value,
    });
  };

  // const addRewardData = (rewardData: any) => {
  //   const existingRewardIndex = rewardArray.findIndex(
  //     (item: any) => item.id === crrRewardId
  //   );
  //   if (existingRewardIndex !== -1) {
  //     const updatedRewardArray = [...rewardArray];
  //     updatedRewardArray[existingRewardIndex] = rewardData;
  //     setRewardArray(updatedRewardArray);
  //     setCrrRewardId("");
  //   } else {
  //     const newRewardData = {
  //       ...rewardData,
  //       id: uuid(),
  //     };
  //     setRewardArray([...rewardArray, newRewardData]);
  //     setCrrRewardId("");
  //   }
  // };

  const [isLoading, setIsLoading] = useState(false);
  const [isClickedAddrewardBtn, setIsClickAddrewardBtn] = useState(false);

  const handleClickAddrewardBtn = () => {
    setIsClickAddrewardBtn(true);
  };
  const handleClickNoAddrewardBtn = () => {
    setIsClickAddrewardBtn(false);
  };
  // add ads perk context
  const [adsPerkArray, setAdsPerkArray] = useState<Perk[]>([
    { title: "", description: "" },
  ]);

  const handleChangePerkValue = (
    keyword: string,
    index: number,
    value: any
  ) => {
    let tempPerkArray = Array.from(adsPerkArray);
    if (keyword === "title") {
      tempPerkArray[index].title = value;
    } else {
      tempPerkArray[index].description = value;
    }
    setAdsPerkArray(tempPerkArray);
  };

  const clearAdsPerkArray = () => {
    setAdsPerkArray([{ title: "", description: "" }]);
  };

  const handleAddNewPerk = () => {
    setAdsPerkArray([
      ...adsPerkArray,
      {
        title: "",
        description: "",
      },
    ]);
  };

  // upload pitch image context
  const [fundPitchImgArray, setFundPitchImgArray] = useState<uploadImage[]>([
    { name: "", img_url: "" },
  ]);
  const handleChangeFundPitchImgValue = (index: number, value: any) => {
    let tempPitchImgArray = Array.from(fundPitchImgArray);
    tempPitchImgArray[index] = value;
    setFundPitchImgArray(tempPitchImgArray);
  };
  const clearFundPitchImgArrayValue = () => {
    setFundPitchImgArray([{ name: "", img_url: "" }]);
  };

  const handleAddNewFundPitchImgUploadForm = () => {
    setFundPitchImgArray([
      ...fundPitchImgArray,
      {
        name: "",
        img_url: "",
      },
    ]);
  };
  const [adsPitchImgArray, setAdsPitchImgArray] = useState<uploadImage[]>([
    { name: "", img_url: "" },
  ]);
  const handleChangeAdsPitchImgValue = (index: number, value: any) => {
    let tempPitchImgArray = Array.from(adsPitchImgArray);
    tempPitchImgArray[index] = value;
    setAdsPitchImgArray(tempPitchImgArray);
  };
  const clearAdsPitchImgArrayValue = () => {
    setAdsPitchImgArray([{ name: "", img_url: "" }]);
  };
  const handleAddNewAdsPitchImgUploadForm = () => {
    setAdsPitchImgArray([
      ...adsPitchImgArray,
      {
        name: "",
        img_url: "",
      },
    ]);
  };
  const [sponsorPitchImgArray, setSponsorPitchImgArray] = useState<
    uploadImage[]
  >([{ name: "", img_url: "" }]);
  const handleChangeSponsorPitchImgValue = (index: number, value: any) => {
    let tempPitchImgArray = Array.from(sponsorPitchImgArray);
    tempPitchImgArray[index] = value;
    setSponsorPitchImgArray(tempPitchImgArray);
  };

  const clearSponsorPitchImgArrayValue = () => {
    setSponsorPitchImgArray([{ name: "", img_url: "" }]);
  };

  const handleAddNewSponsorPitchImgUploadForm = () => {
    setSponsorPitchImgArray([
      ...sponsorPitchImgArray,
      {
        name: "",
        img_url: "",
      },
    ]);
  };

  return (
    <FormStepperContext.Provider
      value={{
        // register value
        registerBaseValue,
        registerValue,
        handleRegisterValue,
        fundraierRegisterValue,
        handleFundraiserRegisterValue,
        advertisingRegisterValue,
        handleAdvertisingRegisterValue,
        sponsorshipRegisterValue,
        handleSponsorshipRegisterValue,
        // update password
        updatePasswordValue,
        handleUpdatePasswordValue,
        // forgot password value
        forgotPasswordValue,
        handleForgotPasswordValue,
        // account update value
        fundraiserAccountUpdateValue,
        handleFundraiserAccountUpdateValue,
        advertisingAccountUpdateValue,
        handleAdvertisingAccountUpdateValue,
        sponsorshipAccountUpdateValue,
        handleSponsorshipAccountUpdateValue,
        // create fundriser value
        createFundraiserValue,
        handleCreateFundraiserValue,
        rewardIdArray,
        handleRewardIdArray,
        handleCreateFundraiserPromote,
        // create advertising value
        createAdvertisingValue,
        handleCreateAdvertisingValue,
        handleCreateAdvertisingPromote,
        // create sponsorship value
        createSponsorshipValue,
        handleCreateSponsorshipValue,
        handleCreateSponsorshipPromote,
        // isLoading
        isLoading,
        setIsLoading,
        //add reward button click
        isClickedAddrewardBtn,
        handleClickAddrewardBtn,
        handleClickNoAddrewardBtn,
        // add perk component
        adsPerkArray,
        handleChangePerkValue,
        handleAddNewPerk,
        // upload pitch image context
        fundPitchImgArray,
        handleAddNewFundPitchImgUploadForm,
        handleChangeFundPitchImgValue,
        adsPitchImgArray,
        handleChangeAdsPitchImgValue,
        handleAddNewAdsPitchImgUploadForm,
        sponsorPitchImgArray,
        handleChangeSponsorPitchImgValue,
        handleAddNewSponsorPitchImgUploadForm,
        donateValue,
        handleDonateValue,
        // ads sale
        adsSaleValue,
        handleAdsSaleValue,
        // sponsorship sale
        sponsorshipSaleValue,
        handleSponsorshipSaleValue,
        // checkout
        checkoutValue,
        handleCheckoutValue,
        // agreement
        buyerValue,
        handleBuyerValue,
        sellerValue,
        handleSellerValue,
        fundTitleImg,
        handleChangeFundTitleImg,
        adsTitleImg,
        fundOverlayImg,
        handleChangeAdsTitleImg,
        handleChangeFundOverlayImg,
        handleChangeSponsorTitleImg,
        sponsorTitleImg,
        clearRegisterValue,
        clearAdsPitchImgArrayValue,
        clearAdsRegisterValue,
        clearAdsTitleImgValue,
        clearAdsUpdateValue,
        clearCreateAdvertisingValue,
        clearCreateFundraiserValue,
        clearCreateSponsorshipValue,
        clearForgotPasswordValue,
        clearfundOverlayImgValue,
        clearFundPitchImgArrayValue,
        clearFundraiserRegisterValue,
        clearFundraiserUpdateValue,
        clearfundTitleImgValue,
        clearAdsPerkArray,
        clearSponsorPitchImgArrayValue,
        clearSponsorRegisterValue,
        clearSponsorTitleImgValue,
        clearSponsorUpdateValue,
        clearUpdatePasswordValue,
        clearRewardIdArrayValue,
      }}
    >
      {children}
    </FormStepperContext.Provider>
  );
};
