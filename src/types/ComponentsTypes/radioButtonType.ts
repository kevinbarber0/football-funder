export interface RadioButtonType  { 
    name: string,
    value: number,
    checked: boolean,
    checkboxStyle:boolean,
    disabled?:boolean,
    onSelect: () => void,
    classes?: string,
    textStyle:string,
}