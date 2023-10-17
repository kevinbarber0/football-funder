import { CardType, MyDropdownType } from "types";
export interface CarouselCardPropsType {
  cardData: CardType;
  account: boolean;
  dropdownData?:MyDropdownType
}