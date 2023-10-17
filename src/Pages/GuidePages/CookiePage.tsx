import React, { useState } from "react";

import { PageTitle, PageSectionTitle, Template, ToggleButton } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const CookiePage: React.FC = () => {
  const [accountCookie, setAccountCookie] = useState<boolean>(false);

  const [loginCookie, setLoginCookie] = useState<boolean>(false);

  const [emailCookie, setEmailCookie] = useState<boolean>(false);

  const [orderCookie, setOrderCookie] = useState<boolean>(false);

  const [surveryCookie, setSurveyCookie] = useState<boolean>(false);

  const [formCookie, setFormCookie] = useState<boolean>(false);

  const [siteCookie, setSiteCookie] = useState<boolean>(false);

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
          <div className="bl:w-[1048px] w-full max-bl:px-5 mx-auto">
            <PageTitle title="Cookie Policy for Football Funder" />
            <div className="mt-30">
              <div className="introText">
                This is the Cookie Policy for Football Funder, accessible from
                www.footballfunder.com
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="What are cookies?"
                intro="As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. 
                      This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being 
                      stored however this may downgrade or 'break' certain elements of the sites functionality."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="How we use cookies"
                intro="We use cookies for a variety of reasons detailed below. Unfortunately in most cases 
                      there are no industry standard options for disabling cookies without completely disabling the functionality and 
                      features they add to this site.It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Disabling cookies"
                intro="You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
                      Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. 
                      Disabling cookies will usually result in also disabling certain functionality and features of the this site. 
                      Therefore it is recommended that you do not disable cookies."
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle title="The cookies we set" />
              <div className="mt-5 flex flex-col gap-5">
                <ToggleButton
                  handleClick={setAccountCookie}
                  defaultValue={accountCookie}
                  className="flex items-center gap-2.5"
                  title="Account related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    If you create an account with us then we will use cookies
                    for the management of the signup process and general
                    administration. These cookies will usually be deleted when
                    you log out however in some cases they may remain afterwards
                    to remember your site preferences when logged out.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setLoginCookie}
                  defaultValue={loginCookie}
                  className="flex items-center gap-2.5"
                  title="Login related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    We use cookies when you are logged in so that we can
                    remember this fact. This prevents you from having to log in
                    every single time you visit a new page. These cookies are
                    typically removed or cleared when you log out to ensure that
                    you can only access restricted features and areas when
                    logged in.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setEmailCookie}
                  defaultValue={emailCookie}
                  className="flex items-center gap-2.5"
                  title="Email newsletters related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    This site offers newsletter or email subscription services
                    and cookies may be used to remember if you are already
                    registered and whether to show certain notifications which
                    might only be valid to subscribed/unsubscribed users.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setOrderCookie}
                  defaultValue={orderCookie}
                  className="flex items-center gap-2.5"
                  title="Orders processing related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    This site offers e-commerce or payment facilities and some
                    cookies are essential to ensure that your order is
                    remembered between pages so that we can process it properly.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setSurveyCookie}
                  defaultValue={surveryCookie}
                  className="flex items-center gap-2.5"
                  title="Surveys related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    From time to time we offer user surveys and questionnaires
                    to provide you with interesting insights, helpful tools, or
                    to understand our user base more accurately. These surveys
                    may use cookies to remember who has already taken part in a
                    survey or to provide you with accurate results after you
                    change pages.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setFormCookie}
                  defaultValue={formCookie}
                  className="flex items-center gap-2.5"
                  title="Forms related cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    When you submit data to through a form such as those found
                    on contact pages or comment forms cookies may be set to
                    remember your user details for future correspondence.
                  </div>
                </ToggleButton>
                <ToggleButton
                  handleClick={setSiteCookie}
                  defaultValue={siteCookie}
                  className="flex items-center gap-2.5"
                  title="Site preferences cookies"
                  titleStyle="valueText"
                >
                  <div className="mt-15 introText">
                    In order to provide you with a great experience on this site
                    we provide the functionality to set your preferences for how
                    this site runs when you use it. In order to remember your
                    preferences we need to set cookies so that this information
                    can be called whenever you interact with a page is affected
                    by your preferences.
                  </div>
                </ToggleButton>
              </div>
            </div>
            <div className="mt-30">
              <div className="darkGreenButtonText">Third party cookies</div>
              <div className="mt-15 introText">
                In some special cases we also use cookies provided by trusted
                third parties. The following section details which third party
                cookies you might encounter through this site.
                <br />
                <br />
                <ul className="list-disc px-5 gap-5">
                  <li>
                    This site uses Google Analytics which is one of the most
                    widespread and trusted analytics solution on the web for
                    helping us to understand how you use the site and ways that
                    we can improve your experience. These cookies may track
                    things such as how long you spend on the site and the pages
                    that you visit so we can continue to produce engaging
                    content.
                    <br />
                    <br />
                    For more information on Google Analytics cookies, see the
                    official Google Analytics page.
                  </li>
                  <br />
                  <br />
                  <li>
                    From time to time we test new features and make subtle
                    changes to the way that the site is delivered. When we are
                    still testing new features these cookies may be used to
                    ensure that you receive a consistent experience whilst on
                    the site whilst ensuring we understand which optimisations
                    our users appreciate the most.
                  </li>
                  <br />
                  <br />
                  <li>
                    As we sell products it's important for us to understand
                    statistics about how many of the visitors to our site
                    actually make a purchase and as such this is the kind of
                    data that these cookies will track. This is important to you
                    as it means that we can accurately make business predictions
                    that allow us to monitor our advertising and product costs
                    to ensure the best possible price.
                  </li>
                  <br />
                  <br />
                  <li>
                    We also use social media buttons and/or plugins on this site
                    that allow you to connect with your social network in
                    various ways. For these to work the following social media
                    sites including;
                    {"{"}List the social networks whose features you have
                    integrated with your site?:12{"}"}, will set cookies through
                    our site which may be used to enhance your profile on their
                    site or contribute to the data they hold for various
                    purposes outlined in their respective privacy policies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-30">
              <div className="darkGreenButtonText">More information</div>
              <div className="mt-15 introText">
                Hopefully that has clarified things for you and as was
                previously mentioned if there is something that you aren't sure
                whether you need or not it's usually safer to leave cookies
                enabled in case it does interact with one of the features you
                use on our site.
                <br />
                <br /> For more general information on cookies, please read the{" "}
                <span className="text-green-70 underline">
                  Cookies Policy article.
                </span>
                <br />
                <br /> However if you are still looking then you can contact us
                through one of our preferred contact method:
                <br />
                <br /> Email:
                <span className="text-green-70 font-semibold">
                  {" "}
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
