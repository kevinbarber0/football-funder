export interface BasinInformationPagePropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  contactText: string;
  isAuth: boolean;
  pageTitle: string;
  showAccountDetails: boolean;
  showOrganisation: boolean;
  showProfileURL: boolean;
  showConfirmation: boolean;
  showModifyAlert: boolean;
  stepNumber: string;
  stepTitle: string;
}
export interface StepPagePropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  pageTitle: string;
  stepNumber: string;
}

export interface FinalTouchedPagePropsType { 
  handlePrevPage: () => void;
  handleNextPage: () => void;
  isCrowdFundingPage:boolean
  stepNumber: string;
}
export interface ListingDetailsPagePropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  description: boolean;
  listingTitle: string;
  pageTitle:string
  stepNumber: string;
}
export interface AddDetailsStepPagePropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  addPerk: boolean;
  descriptionTitle: string;
  pageTitle: string;
  pitchImage: string;
  stepNumber: string;
  titleImage: string;
  isShowDesciptionPanel: boolean;
  isShowAdvertNum:boolean
}

