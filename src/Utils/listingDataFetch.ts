import { FaRegUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import { BiMap, BiMessageRounded } from "react-icons/bi";
import CardImageNone from "Assets/images/explore/card-s-none.png";
import dayjs from 'dayjs'

export const listingDataFetch = (items: any) => {
   let Data = [];
   for (let item of items) {
     let data = {
        broadcastingType: "Live",
        club: {
          icon: FaRegUserCircle,
          backgroundColor: "bg-green-80",
          textColor: "text-green-10",
          text: item.userData.organization?.name,
        },
        location: {
          icon: BiMap,
          backgroundColor: "bg-green-80",
          textColor: "text-white",
          text: `${item.userData.country} ${item.userData.city}`,
        },
        title: item.title,
        description: item.description,
        progress: true,
        fund: "50% funded",
        curFund: 50000,
        oriFund: 100000,
        date: {
          icon: FaRegCalendarAlt,
          backgroundColor: "bg-gray-100",
          textColor: "text-green-70",
          text: dayjs(item.created_at).format("MMM DD, YYYY"),
        },
        collection: {
          icon: BiMessageRounded,
          backgroundColor: "bg-gray-100",
          textColor: "text-green-70",
          text: "15 Comments",
        },
        image:
        item.title_img_link === "" || !item.title_img_link
        ? CardImageNone
        : `https://storage.googleapis.com/football_funder${item.title_img_link}`,
      };
      Data.push(data);
  }
  return Data;
  };