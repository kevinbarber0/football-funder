import React from "react";

import { PageTitle, PageSectionTitle, Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const FraudPrivacyPage: React.FC = () => {
  return (
    <Template>
      <div className="relative xs:pt-5 pt-[10px]  xs:pb-[150px] pb-[50px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0">
            <img
              src={ExploreMask}
              alt="explore back mask"
              className="object-cover w-full max-ns:hidden"
            />
            <img
              src={MobileExploreMask}
              alt="explore back mask"
              className="object-cover w-full ns:hidden"
            />
          </div>
          <div className="lg:w-[1000px] w-full max-lg:px-5 mx-auto">
            <PageTitle title="Fraud Policy" />
            <div className="mt-30">
              <PageSectionTitle title="Collection of Information" />
              <div className="mt-2.5 introText">
                a. Users must not use the platform for any illegal, fraudulent
                or misleading activities.
                <br />
                <br /> b. Users must not create fake accounts, profiles, or
                projects for any purpose, including to scam or deceive other
                users.
                <br />
                <br /> c. Users must not use stolen credit cards or other
                fraudulent means to make contributions or receive funds.
                <br />
                <br /> d. Users must not impersonate or misrepresent any person
                or entity, including the platform itself.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Verification Process" />
              <div className="mt-2.5 introText">
                a. The platform will verify the identity and legitimacy of users
                and projects to the best of its ability, using various tools and
                methods, including but not limited to, KYC (Know Your Customer)
                checks, third-party identity verification services, and manual
                reviews.
                <br />
                <br /> b. The platform reserves the right to reject or suspend
                any user or project that fails to pass the verification process,
                or if there is any suspicion of fraud or wrongdoing.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Reporting Fraud" />
              <div className="mt-2.5 introText">
                a. Users are encouraged to report any suspicious or fraudulent
                activities to the platform immediately.
                <br />
                <br /> b. The platform will investigate all reported cases of
                fraud and take appropriate action, which may include suspending
                or terminating the user's account, withholding funds, and
                reporting the incident to relevant authorities.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Liability" />
              <div className="mt-2.5 introText">
                a. The platform is not responsible for any losses or damages
                incurred as a result of fraud or other illegal activities by
                users.
                <br />
                <br /> b. The platform reserves the right to recover any funds
                that were obtained fraudulently or in violation of the
                platform's terms and conditions.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Cooperation with Law Enforcement" />
              <div className="mt-2.5 introText">
                a. The platform will cooperate fully with law enforcement
                agencies and other authorities in investigating and prosecuting
                any cases of fraud or other illegal activities.
                <br />
                <br /> b. The platform may disclose user information,
                transaction records, and other data to law enforcement agencies
                and other authorities as required by law.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
