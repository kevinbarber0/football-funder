import React from "react";
import { useNavigate } from "react-router";
import { SIGNUP_URL, SIGNIN_URL } from "Lib/urls";

interface Proos {
  image: string;
}

export const Join: React.FC<Proos> = ({ image }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bl:w-[1000px] bl:px-3 md:px-10 w-full mx-auto">
        <div className="relative rounded-20 overflow-hidden">
          <img
            src={image}
            alt="join us"
            className="h-[300px] w-full object-cover"
          />
          <div className="absolute top-0 w-full h-full px-5 py-[32px]">
            <div className="flex flex-col items-center h-full justify-between max-sm:justify-around">
              <div className="font-semibold text-[50px] leading-[60px] text-green-70">
                Join now!
              </div>
              <div
                className="flex flex-col gap-[10px] text-green-70 
                            text-[14px] leading-[20px] text-center xs:w-[440px] w-full max-sm"
              >
                <div>
                  Explore our tools to crowdfund, sell advertising and agree
                  sponsorship for your organisation.
                </div>
                <div className="max-sm:hidden">
                  Whether a club, supporters' trust, league or individual - our
                  platform will support your commercial goals.
                </div>
              </div>
              <div className="flex justify-center gap-5 max-vs:gap-2">
                <button
                  className="w-[150px] h-[50px] max-vs:w-[120px] max-vs:h-[50px]
                              text-[16px] leading-[22px] font-semibold bg-white rounded-10"
                  onClick={() => {
                    navigate(SIGNIN_URL);
                  }}
                >
                  Sign in
                </button>
                <button
                  className="w-[150px] h-[50px]  max-vs:w-[120px] max-vs:h-[50px]
                             text-[16px] leading-[22px] font-semibold bg-green-70 text-white rounded-10"
                  onClick={() => {
                    navigate(SIGNUP_URL);
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
