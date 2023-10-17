import classNames from "classnames";

const status = [
  { lable: "Sent", className: "bg-green-10 text-green-70" },
  { lable: "Pending", className: "bg-gray-20 text-green-70" },
];

interface TableLabelProps {
  type: number;
}
export const WithdrawalTableLabel = ({ type }: TableLabelProps) => {
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
