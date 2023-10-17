import { IPadDataType, SelectDataType} from "types";
import FirstIpadImage from "Assets/images/landing/first-ipad..png";
import SecondIpadImage from "Assets/images/landing/second-ipad.png";

export const IPadData: IPadDataType[] = [
    {
        imageSrc: FirstIpadImage,
        title:
        "Promote your organisation’s commercial interests on a football exclusive platform",
        description1:
        "Our crowdfunding engine and advertising and sponsorship marketplace provides exposure for your club or organisation, regardless of size.",
        description2:
          "Whether you're raising crucial funds, or have branding opportunities available, our platform is committed to ensuring your goals are met."
    },
    {
        imageSrc: SecondIpadImage,
        title:
            "Market your football brand and reach larger audiences with our campaign support",
        description1:
            " We’ll provide you with a dedicated profile to support your commercial activity and engage the audience you want to reach, all while being cost efficient.",
        description2:
            "If you have a cause or commercial opportunity you'd like to promote further, we can help with that too."
    }
]


export const SignUpSelectFormData: SelectDataType[] = [
    {
      value: 1,
      option: "Organisation",
    },
    {
      value: 2,
      option: "Individual",
    },
  ];

 