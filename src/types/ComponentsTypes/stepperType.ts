export interface StepperActionPropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
}
export interface FirstStepperActionPropsType {
  handleNextPage: () => void;
}

export interface LivePagePropsType { 
  handlePrevPage: () => void;
  handleNextPage: () => void;
  pageTitle: string;
  introTitle: string;
}