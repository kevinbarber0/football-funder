import React from "react";

import { PageTitle, PageSectionTitle, Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const PrivacyPolicyPage: React.FC = () => {
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
            <PageTitle title="Privacy Policy" />
            <div className="mt-30 introText">
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you use our platform.
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Collection of Information"
                intro="We collect personal information from you when you register on our platform, create a crowdfunding campaign, or make a contribution to a campaign. 
                        The information we collect may include your name, email address, phone number, payment information, and other information you provide."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Use of Information" />
              <div className="mt-2.5 introText">
                We use the information we collect to:
                <br />
                <br /> a. Provide our services to you, including facilitating
                crowdfunding campaigns and processing contributions;
                <br />
                <br /> b. Communicate with you about your use of our platform
                and our services;
                <br />
                <br /> c. Improve our platform and our services;
                <br />
                <br /> d. Comply with legal and regulatory requirements;
                <br />
                <br />
                e. Detect and prevent fraud, security breaches, and other
                potentially illegal or prohibited activities.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="We take reasonable measures to protect your personal information from unauthorised access, disclosure, or misuse. 
                      However, no security measure is perfect, and we cannot guarantee the security of your personal information."
                title="Protection of Information"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Sharing of Information" />
              <div className="mt-2.5 introText">
                We may share your personal information with:
                <br />
                <br /> a. Campaign creators, for the purpose of fulfilling
                rewards or benefits offered in exchange for contributions;
                <br />
                <br /> b. Payment processors, for the purpose of processing
                contributions;
                <br />
                <br /> c. Service providers, for the purpose of providing our
                services to you;
                <br />
                <br /> d. Law enforcement or other government agencies, as
                required by law or to protect our rights, property, or safety.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="We use cookies to collect information about your use of our platform. Cookies are small files that are stored on your device when you visit a website. 
                      They allow us to remember your preferences and provide a personalized experience."
                title="Cookies"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="Our platform may contain links to third-party websites or services. 
                        We are not responsible for the privacy practices or content of those websites or services."
                title="Third-Party Links"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="Our platform is not intended for use by children under the age of 18. 
                       We do not knowingly collect personal information from children under the age of 18."
                title="Children's Privacy"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="We may update this Privacy Policy from time to time. 
                        We will notify you of any material changes to this Privacy Policy by posting a notice on our platform or sending you an email."
                title="Changes to this Privacy Policy"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Contact Information" />
              <div className="mt-2.5">
                <div className="introText">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at{" "}
                  <span className="text-green-70 font-semibold">
                    support@footballfunder.com.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
