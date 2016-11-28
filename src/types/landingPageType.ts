export interface IPadDataType {
  imageSrc: string;
  title: string;
  description1: string;
  description2: string;
}

  export interface SignUpOptionType {
    id: number;
    label: string;
    value: string;
  }

  export interface FormDataType {
    id?: number;
    label: string;
    padding: string,
    textSize:string,
    type: string;
    height: string;
    content?: string;
  }