import React from "react";
interface ParentComponentProps {
  pages: { name: string; component: React.ReactNode }[];
  stepNumber: number;
}

export const GeneralStepper: React.FC<ParentComponentProps> = ({
  pages,
  stepNumber,
}) => {
  return <div>{pages[stepNumber].component}</div>;
};
