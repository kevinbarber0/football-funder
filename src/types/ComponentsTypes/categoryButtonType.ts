export interface CategoryButtonType { 
   label: string,
    value: number,
    checked: boolean,
    disabled?:boolean,
    onSelect: () => void,
    classes?:string
}