import React, { createContext, useEffect, useState } from "react";

interface ColorContextProps {
  primaryColor: string;
  setPrimaryColor: React.Dispatch<React.SetStateAction<string>>;
  secondaryColor: string;
  setSecondaryColor: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  gradientColor: string;
  setGradientColor: React.Dispatch<React.SetStateAction<string>>;
}

interface ColorProviderPropsType {
  children: React.ReactNode;
}

export const ColorContext = createContext<ColorContextProps | undefined>(
  undefined
);

export const ColorProvider: React.FC<ColorProviderPropsType> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    sessionStorage.getItem("backgroundColor") || "#061807"
  );
  const [gradientColor, setGradientColor] = useState<string>(
    sessionStorage.getItem("gradientColor") || "#78E98C"
  );
  const [primaryColor, setPrimaryColor] = useState<string>(
    sessionStorage.getItem("primaryColor") || "#78E98C"
  );
  const [secondaryColor, setSecondaryColor] = useState<string>(
    sessionStorage.getItem("secondaryColor") || "#FFFFFF"
  );

  useEffect(() => {
    sessionStorage.setItem("backgroundColor", backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    sessionStorage.setItem("gradientColor", gradientColor);
  }, [gradientColor]);

  useEffect(() => {
    sessionStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    sessionStorage.setItem("secondaryColor", secondaryColor);
  }, [secondaryColor]);

  return (
    <ColorContext.Provider
      value={{
        backgroundColor,
        gradientColor,
        primaryColor,
        secondaryColor,
        setBackgroundColor,
        setGradientColor,
        setPrimaryColor,
        setSecondaryColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
