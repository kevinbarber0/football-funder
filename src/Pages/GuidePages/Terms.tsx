import React from "react";

import { PageTitle, PageSectionTitle, Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const Terms: React.FC = () => {
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
            <PageTitle title="Terms & Conditions" />
            <div className="mt-30">
              <PageSectionTitle
                title="1. Introduction"
                intro="By using our platform, you agree to comply with and be bound by these Terms and Conditions. 
                       If you do not agree to these Terms and Conditions, you should not use our platform."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="2. Eligibility"
                intro="To use our platform, you must be at least 18 years old and have the legal capacity to enter into contracts. 
                        If you are using our platform on behalf of a company or organisation, 
                        you must have the authority to bind that entity to these Terms and Conditions."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="3. Campaigns" />
              <div className="mt-2.5 introText">
                Our platform allows users to create crowdfunding campaigns to
                raise funds for various projects or initiatives.
                <br />
                <br />  By creating a campaign on our platform, you agree to:
                <br />
                <br /> a. Provide accurate and truthful information about the
                campaign and the purpose for which the funds will be used;
                <br />
                <br /> b. Comply with all applicable laws and regulations,
                including those related to fundraising and crowdfunding;
                <br />
                <br /> c. Honour any rewards or benefits offered to backers in
                exchange for their contributions;
                <br />
                <br /> d. Use the funds only for the purpose specified in the
                campaign;
                <br />
                <br /> e. Provide regular updates to backers on the status of
                the campaign and the use of funds.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="4. Contributions" />
              <div className="mt-2.5 introText">
                By contributing to a campaign on our platform, you agree to:
                <br />
                <br /> a. Provide accurate and truthful information, including
                your name and payment information;
                <br />
                <br /> b. Comply with all applicable laws and regulations,
                including those related to fundraising and crowdfunding;
                <br />
                <br /> c. Understand that your contribution is a donation and
                does not entitle you to any ownership or equity in the campaign
                or the project being funded;
                <br />
                <br /> d. Understand that your contribution may be refunded if
                the campaign is cancelled for any reason;
                <br />
                <br /> e. Understand that the rewards or benefits offered by the
                campaign creator are not guaranteed and may be subject to change
                or cancellation.
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="Our platform may charge fees for the use of our services, 
                      including a percentage of funds raised by campaigns. 
                      By using our platform, you agree to pay any applicable fees."
                title="5. Fees"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="By using our platform, you agree to respect the intellectual property rights of others. 
                      You may not use any content on our platform without the permission of the owner of the intellectual property rights."
                title="6. Intellectual Property"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro='Our platform is provided on an "as is" and "as available" basis. 
                      We make no representations or warranties of any kind, express or implied, 
                      as to the operation of our platform or the information, content, materials, or products included on our platform.'
                title="7. Disclaimer of Warranties"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="To the extent permitted by law, we will not be liable for any damages of any kind arising from the use of our platform, 
                        including, but not limited to, direct, indirect, incidental, punitive, and consequential damages."
                title="8. Limitation of Liability"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="You agree to indemnify and hold us harmless from any claims, damages, or other expenses arising 
                        from your use of our platform or your breach of these Terms and Conditions."
                title="9. Indemnification"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="We reserve the right to terminate or suspend your access to our platform at any time, without notice, for any reason."
                title="10. Termination"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in England and Wales."
                title="11. Governing Law"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                intro="We reserve the right to modify these Terms and Conditions at any time. 
                      Your continued use of our platform after any such modifications constitutes your acceptance of the modified Terms and Conditions."
                title="12. Modifications"
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="13. Contact Information" />
              <div className="mt-2.5 introText">
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at{" "}
                <span className="text-green-70 font-semibold ">
                  support@footballfunder.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
