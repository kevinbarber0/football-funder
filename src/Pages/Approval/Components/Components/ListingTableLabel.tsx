import classNames from "classnames";

const status = [
  { lable: "Live", className: "bg-green-10 text-green-70" },
  { lable: "Pending", className: "bg-gray-20 text-green-70" },
  { lable: "Rejected", className: "bg-red-500 text-white" },
  { lable: "Cancelled", className: "bg-black text-white" },
];

interface TableLabelProps {
  type: number;
}
export const ListingTableLabel = ({ type }: TableLabelProps) => {
  return (
    <div
      className={classNames(
        "text-xs leading-normal font-medium px-2 py-0.5 rounded-2xl w-fit",
        status[type].className
      )}
    >
      {status[type].lable}
    </div>
  );
};
