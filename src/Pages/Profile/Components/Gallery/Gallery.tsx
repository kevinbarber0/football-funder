import React from "react";
import GalleryImg1 from "Assets/images/profile/gallery-1.png";
import GalleryImg2 from "Assets/images/profile/gallery-2.png";
import GalleryImg3 from "Assets/images/profile/gallery-3.png";
import GalleryImg4 from "Assets/images/profile/gallery-4.png";
import GalleryImg5 from "Assets/images/profile/gallery-5.png";
import GalleryImg6 from "Assets/images/profile/gallery-6.png";

export const Gallery: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 ns:grid-cols-2  gap-1 rounded-20 overflow-hidden">
      <div>
        <img src={GalleryImg1} alt="" className="h-full w-full" />
      </div>

      <div>
        <img src={GalleryImg2} alt="" className="h-full w-full" />
      </div>

      <div>
        <img src={GalleryImg3} alt="" className="h-full w-full" />
      </div>

      <div>
        <img src={GalleryImg4} alt="" className="h-full w-full" />
      </div>

      <div>
        <img src={GalleryImg5} alt="" className="h-full w-full" />
      </div>

      <div>
        <img src={GalleryImg6} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};
