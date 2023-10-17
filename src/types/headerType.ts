import { IconType } from "react-icons/lib"

export interface MenuItemType {
  title: string,
  href: string,
  children: ButtonItemType[]
};
export interface HamburgerMenuItemType {
  title: string,
  href?: string,
  children?: ButtonItemType[]
};
export interface ButtonItemType {
  title: string,
  href: string,
};

export interface AccountMenuDataType { 
  id: number,
  title: string
  url?:string
};

export interface SearchDataType { 
  backgroundColor: string,
  placeholder: string,
  placeholderClass: string,
  padding:string,
  inputColor: string,
  inputTextSize:string,
  border:string,
  icon: IconType,
  iconColor: string,
  iconSize:string
}