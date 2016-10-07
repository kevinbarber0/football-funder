import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

interface SlideBarDataProps {
  children: React.ReactNode;
}

export const SlideBar: React.FC<SlideBarDataProps> = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <div>
      <Carousel
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        // containerProps={{
        //   style: {
        //     width: "100%",
        //     justifyContent: "space-between",
        //     userSelect: "none",
        //   },
        // }}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            cursor: "pointer",
            fontSize: "30px",
            textAlign: "center",
            marginLeft: 10,
            padding: 10,
          },
          children: (
            <span>
              <FiArrowRight />
            </span>
          ),
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            border: "none",
            cursor: "pointer",
            fontSize: "30px",
            textAlign: "center",
            marginRight: 10,
            padding: 10,
          },
          children: (
            <span>
              <FiArrowLeft />
            </span>
          ),
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "50%",
              margin: "15px 3px 3px 3px",
              border: "2px solid #061807",
            },
          },
          activeItemBtnProps: {
            style: {
              height: 10,
              width: 10,
              borderRadius: "0%",
              border: "1px solid #061807",
              margin: "15px 3px 3px 3px",
              backgroundColor: "#061807",
            },
          },
        }}
        speed={400}
        itemsToShow={3}
        // centerMode={true}
        // responsiveProps={[
        //   {
        //     itemsToShow: 2,
        //     itemsToScroll: 2,
        //     maxWidth: 1100,
        //   },
        // ]}
      >
        {children}
      </Carousel>
    </div>
  );
};
