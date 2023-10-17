import React from "react";
import { AboutUsList, Template } from "UI";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import ImageOne from "Assets/images/aboutus/image-one.png";
import ImageTwo from "Assets/images/aboutus/image-two.png";
import UserImage from "Assets/images/aboutus/user-image.png";
import IncOne from "Assets/images/aboutus/inc-one.png";
import IncTwo from "Assets/images/aboutus/inc-two.png";
import IncThree from "Assets/images/aboutus/inc-three.png";
import IncFour from "Assets/images/aboutus/inc-four.png";

export const AboutUs: React.FC = () => {
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[120px] pb-[60px]">
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
          <div className="xm:w-[870px] w-full max-lg:px-5 mx-auto">
            <div className="generalTitle">About Us</div>
            <div className="relative mt-30 xm:w-[870] w-full bg-green-70 px-7 py-8 rounded-20 z-10">
              <div className="text-green-10 text-[21px] leading-7">
                The late, legendary commentator John Motson was asked in an
                <br className="max-md:hidden" />
                interview a couple of years before his passing -
              </div>
              <div className="mt-30 text-[21px] leading-7 font-semibold text-white">
                “How important is football to society?”
              </div>
              <div className="mt-30">
                <div className="generalSmallText text-white">
                  “Majorly important. It represents an outlet for people.
                  <br />
                  <br />A brotherly affection between people who support the
                  same team.  <br />
                  <br /> It streamlines an interest that people can take,
                  whatever their age. <br />
                  <br /> Whether it’s on the television, in the stadium, on
                  their mobile phones. <br />
                  <br />
                  Go into a pub and try and listen to a conversation without
                  football. Impossible. <br />
                  <br />
                  It captivates the nation. It outreaches every other sport.
                  Nothing gets near football for exposure. <br />
                  <br />
                  And it’s not just in this country, <br />
                  <br />
                  <span className="text-green-10">
                    it’s worldwide.  Football - a national obsession!”
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-30 introText">
              This national obsession of ours relies on storytelling. 
              <br /> <br /> At Football Funder, our goal is to bring the stories
              of clubs and organisations to life, and raise funds along the way
              to keep our game thriving at all levels.
            </div>
            <div className="mt-[60px]">
              <AboutUsList
                alignStyle="flex-row"
                buttonOneName="Start a fundraiser"
                buttonTwoName="Explore"
                image={ImageOne}
                introText1="Whether it’s raising a few quid for kits or hoping to build a brand new stand, our crowdfunding engine provides exposure exclusively for football related causes."
                introText2="Instead of competing for space with non-football initiatives on other crowdfunding platforms, start your fundraiser with us and gain traction with an engaged audience of football supporters."
                title="Fundraising"
              />
            </div>
            <div className="mt-[60px]">
              <AboutUsList
                alignStyle="flex-row-reverse"
                buttonOneName="List advertising"
                buttonTwoName="List sponsorship"
                fullButtonName="Explore"
                image={ImageTwo}
                introText1="Our advertising and sponsorship marketplace allows clubs and organisations seeking partners to better present partnership benefits and generate more sales."
                introText2="In turn, businesses and brands looking to invest in football to increase their exposure can see more clearly the opportunities available through our easy to navigate platform."
                title="Advertising and Sponsorship"
              />
            </div>
            <div className="xm:mt-[90px] mt-[75px] p-5 rounded-20 bg-gray-100">
              <div className="flex items-center gap-4">
                <img src={UserImage} alt="userimage" />
                <div>
                  <div className="stepLabelTitle">Damien Scott</div>
                  <div className="mt-1 buttonText text-green-70">Founder</div>
                </div>
              </div>
              <div className="mt-30 introText">
                Although he’s not blessed with silky skills at his feet, Damien
                has taken up the challenge of The Gaffer at Football Funder
                after more than a decade spent at consumer tech businesses that
                have disrupted traditional industries. <br />
                <br />
                As employee number one with e-cigarette firm SKYCIG (acquired in
                2013 and rebranded to Blu), he gained Advertising Standards
                Agency approval to air the first legal vaping television advert
                in Europe, and persuaded Premier League clubs to advertise
                vaping products on pitchside ads during matches for the first
                time. <br />
                <br />
                Damien helped drive the hyper-growth of Uber in the UK as
                Operations & Logistics Manager from 2015-19, before developing
                OYO Hotels & Homes UK portfolio. Most recently, Damien was Head
                of Operations at used car retailer Cazoo, responsible for a team
                of 350 people, scaling their click and collect operation to
                account for over 70% of total sales volumes.
                <br />
                <br /> Originally from Scotland, he supports Rangers FC, and now
                resides in County Durham with his fiancée Jen and their twin
                boys, Jude and Cameron.
              </div>
              <div className="mt-30 buttonText text-green-70">
                Built on experience from:
              </div>
              <div className="mt-30 max-ns:grid max-ns:grid-cols-5 w-full ns:flex gap-7 max-ns:gap-2.5 items-center">
                <img
                  src={IncOne}
                  alt="Inc First Logo"
                  className="object-contain"
                />
                <img
                  src={IncTwo}
                  alt="Inc Second Logo"
                  className="max-ns:col-span-2 object-contain"
                />
                <img
                  src={IncThree}
                  alt="Inc Three Logo"
                  className="object-contain"
                />
                <img
                  src={IncFour}
                  alt="Inc Four Logo"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
