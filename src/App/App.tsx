import React, { useEffect } from "react";
import { ColorProvider } from "App/ColorProvider";
import { FormStepperProvider } from "App/FormStepperProvider";

import {
  HOME_URL,
  EXPLORE_URL,
  HOWITWORKS_URL,
  SIGNUP_URL,
  SIGNIN_URL,
  EMAILVERIFICATION_URL,
  VERIFY_ACCOUNT_URL,
  FORGOTPASSWORD_URL,
  RESET_PASSWORD,
  FUNDRAISERSIGNUP_URL,
  FUNDRAISERACCOUNTUPDATE_URL,
  CREATEFUNDRAISER_URL,
  CROWDFUNDINGLIST_URL,
  CROWDFUNDINGDONATE_URL,
  CROWDFUNDDETAILLIVE_URL,
  CROWDFUNDDETAILLIVEMENU_URL,
  CROWDFUNDDETAILPENDING_URL,
  MAKEAWITHDRAWAL_URL,
  ADVERTISINGSIGNUP_URL,
  ADVERTISINGACCOUNTUPDATE_URL,
  CREATEADVERTISING_URL,
  ADVERTISINGSALE_URL,
  ADSDETAILLIVE_URL,
  ADSDETAILPENDING_URL,
  ADSLISTING_URL,
  SPONSORSHIPSIGNUP_URL,
  SPONSORSHIPACCOUNTUPDATE_URL,
  CREATESPONSORSHIP_URL,
  SPONSORSHIPLISTING_URL,
  SPONSORSHIPDETAILLIVE_URL,
  SPONSORSHIPDETAILPENDING_URL,
  SPONSORSHIPSALE_URL,
  PROMOTE_URL,
  CHECKOUT_URL,
  DONATIONVIEW_URL,
  SUPPORTERVIEW_URL,
  MYACCOUNT_URL,
  EDITMYACCOUNT_URL,
  UPDATEPASSWORD_URL,
  PITCHSIDEADBOARD_URL,
  BUYERFIRSTPAGE_URL,
  BUYERCHECKOUT_URL,
  BUYERFINAL_URL,
  SELLERFIRSTPAGE_URL,
  SELLERFINAL_URL,
  PROFILEPAGE_URL,
  PROFILEEDIT_URL,
  INDIVIDUALPROFILEPAGE_URL,
  SPONSORPROFILEPAGE_URL,
  LISTINGAPPROVAL_URL,
  ABOUTUS_URL,
  WITHDRAWALAPPROVAL_URL,
  COOKIE_URL,
  FAQ_URL,
  FEES_URL,
  FRAUDPOLICY_URL,
  PRIVACYPOLICY_URL,
  SUPPORT_URL,
  TERMS_URL,
} from "Lib/urls";

import {
  Home,
  Explore,
  HowItWorks,
  SignUp,
  Signin,
  EmailVerification,
  VerifyAccount,
  ForgotPassword,
  ResetPassword,
  FundraiserSignUp,
  FundraiserAccountUpate,
  CreateFundraiser,
  CrowdfundingList,
  CrowdfundingDonate,
  MakeWithdrawal,
  CrowdFundDetailLivePage,
  CrowdFundDetailLiveMenuPage,
  CrowdFundDetailPendingPage,
  AdvertisingSignUp,
  AdvertisingAccountUpdate,
  CreateAdsListing,
  AdsList,
  AdDetailLivePage,
  AdDetailPendingPage,
  AdvertisingSale,
  SponsorshipSignUp,
  SponsorshipAccountUpdate,
  CreateSponsorshipListing,
  SponsorshipList,
  SponsorshipDetailLivePage,
  SponsorshipDetailPendingPage,
  SponsorshipSale,
  Promote,
  Checkout,
  SupporterView,
  DonationView,
  MyAccountPage,
  EditMyAccount,
  UpdatePassword,
  PitchSideAdBoard,
  BuyerFirstPage,
  BuyerCheckoutPage,
  BuyerFinalPage,
  SellerFirstPage,
  SellerFinalPage,
  ProfilePage,
  EditProfile,
  IndividualProfilePage,
  SponsorProfilePage,
  ListingApproval,
  WithdrawalApproval,
  AboutUs,
  CookiePage,
  FAQPage,
  Fees,
  FraudPrivacyPage,
  PrivacyPolicyPage,
  Support,
  Terms,
} from "Pages";
import {
  BrowserRouter,
  useNavigate,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const RedirectToRoot = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/");
    }, [navigate]);
    return null;
  };

  return (
    <>
      <FormStepperProvider>
        <ColorProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path={HOME_URL} element={<Home />} />
              <Route path={EXPLORE_URL} element={<Explore />} />
              <Route path={HOWITWORKS_URL} element={<HowItWorks />} />

              {/* Authentication Pages */}
              <Route path={SIGNUP_URL} element={<SignUp />} />
              <Route path={SIGNIN_URL} element={<Signin />} />
              <Route
                path={EMAILVERIFICATION_URL}
                element={<EmailVerification />}
              />
              <Route
                path={VERIFY_ACCOUNT_URL + "/:token"}
                element={<VerifyAccount />}
              />
              <Route path={FORGOTPASSWORD_URL} element={<ForgotPassword />} />
              <Route
                path={RESET_PASSWORD + "/:token"}
                element={<ResetPassword />}
              />

              {/* Fundraising Pages */}
              <Route
                path={FUNDRAISERSIGNUP_URL}
                element={<FundraiserSignUp />}
              />
              <Route
                path={FUNDRAISERACCOUNTUPDATE_URL}
                element={<FundraiserAccountUpate />}
              />
              <Route
                path={CREATEFUNDRAISER_URL}
                element={<CreateFundraiser />}
              />
              <Route
                path={CROWDFUNDINGLIST_URL}
                element={<CrowdfundingList />}
              />
              <Route
                path={CROWDFUNDINGDONATE_URL}
                element={<CrowdfundingDonate />}
              />
              <Route
                path={CROWDFUNDDETAILLIVE_URL}
                element={<CrowdFundDetailLivePage />}
              />
              <Route
                path={CROWDFUNDDETAILLIVEMENU_URL}
                element={<CrowdFundDetailLiveMenuPage />}
              />
              <Route
                path={CROWDFUNDDETAILPENDING_URL}
                element={<CrowdFundDetailPendingPage />}
              />
              <Route />
              <Route path={MAKEAWITHDRAWAL_URL} element={<MakeWithdrawal />} />

              {/* Advertising Pages */}
              <Route
                path={ADVERTISINGSIGNUP_URL}
                element={<AdvertisingSignUp />}
              />
              <Route
                path={ADVERTISINGACCOUNTUPDATE_URL}
                element={<AdvertisingAccountUpdate />}
              />
              <Route
                path={CREATEADVERTISING_URL}
                element={<CreateAdsListing />}
              />
              <Route path={ADSLISTING_URL} element={<AdsList />} />
              <Route path={ADSDETAILLIVE_URL} element={<AdDetailLivePage />} />
              <Route
                path={ADSDETAILPENDING_URL}
                element={<AdDetailPendingPage />}
              />
              <Route path={ADVERTISINGSALE_URL} element={<AdvertisingSale />} />

              {/* Sponsorship Page */}
              <Route
                path={SPONSORSHIPSIGNUP_URL}
                element={<SponsorshipSignUp />}
              />
              <Route
                path={SPONSORSHIPACCOUNTUPDATE_URL}
                element={<SponsorshipAccountUpdate />}
              />
              <Route
                path={CREATESPONSORSHIP_URL}
                element={<CreateSponsorshipListing />}
              />
              <Route
                path={SPONSORSHIPLISTING_URL}
                element={<SponsorshipList />}
              />
              <Route
                path={SPONSORSHIPDETAILLIVE_URL}
                element={<SponsorshipDetailLivePage />}
              />
              <Route
                path={SPONSORSHIPDETAILPENDING_URL}
                element={<SponsorshipDetailPendingPage />}
              />
              <Route path={SPONSORSHIPSALE_URL} element={<SponsorshipSale />} />

              {/* Promote Page */}
              <Route path={PROMOTE_URL} element={<Promote />} />

              {/* Checkout Page */}
              <Route path={CHECKOUT_URL} element={<Checkout />} />

              {/* View Pages */}
              <Route path={DONATIONVIEW_URL} element={<DonationView />} />
              <Route path={SUPPORTERVIEW_URL} element={<SupporterView />} />

              {/* My Account Page */}
              <Route path={MYACCOUNT_URL} element={<MyAccountPage />} />
              <Route path={EDITMYACCOUNT_URL} element={<EditMyAccount />} />
              <Route path={UPDATEPASSWORD_URL} element={<UpdatePassword />} />
              <Route
                path={PITCHSIDEADBOARD_URL}
                element={<PitchSideAdBoard />}
              />

              {/* Agreement Pages */}
              <Route path={BUYERFIRSTPAGE_URL} element={<BuyerFirstPage />} />
              <Route path={BUYERCHECKOUT_URL} element={<BuyerCheckoutPage />} />
              <Route path={BUYERFINAL_URL} element={<BuyerFinalPage />} />
              <Route path={SELLERFIRSTPAGE_URL} element={<SellerFirstPage />} />
              <Route path={SELLERFINAL_URL} element={<SellerFinalPage />} />

              {/* Profile Pages */}
              <Route path={PROFILEPAGE_URL} element={<ProfilePage />} />
              <Route path={PROFILEEDIT_URL} element={<EditProfile />} />
              <Route
                path={INDIVIDUALPROFILEPAGE_URL}
                element={<IndividualProfilePage />}
              />
              <Route
                path={SPONSORPROFILEPAGE_URL}
                element={<SponsorProfilePage />}
              />

              {/* Approval Pages */}
              <Route path={LISTINGAPPROVAL_URL} element={<ListingApproval />} />
              <Route
                path={WITHDRAWALAPPROVAL_URL}
                element={<WithdrawalApproval />}
              />

              {/* Guide Pages */}
              <Route path={ABOUTUS_URL} element={<AboutUs />} />
              <Route path={COOKIE_URL} element={<CookiePage />} />
              <Route path={FAQ_URL} element={<FAQPage />} />
              <Route path={FEES_URL} element={<Fees />} />
              <Route path={FRAUDPOLICY_URL} element={<FraudPrivacyPage />} />
              <Route path={PRIVACYPOLICY_URL} element={<PrivacyPolicyPage />} />
              <Route path={SUPPORT_URL} element={<Support />} />
              <Route path={TERMS_URL} element={<Terms />} />
              <Route path="*" element={<RedirectToRoot />} />
            </Routes>
            <ScrollToTop />
          </BrowserRouter>
        </ColorProvider>
      </FormStepperProvider>
    </>
  );
}

export default App;
