import { CardLabelType } from 'types'
import { FaRegUserCircle } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi'

export const SaleClubLabel: CardLabelType = {
    icon:FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}

export const SaleLocationLabel: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white", 
    text: "Durham, England",
}
