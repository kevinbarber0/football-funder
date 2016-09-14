import React, { useState } from "react";

import { LISTING_TABLE_HEAD } from "Config";
import { ListingApprovalDataType } from "types";
import {
  NumberTextButton,
  ListingTableLabel,
  ListingAction,
} from "./Components";

interface ApprovalTablePropsType {
  tableData: ListingApprovalDataType;
}

export const ApprovalTable: React.FC<ApprovalTablePropsType> = ({
  tableData,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentValue, setCurrentValue] = useState<number | undefined>();

  return (
    <table className="w-full table-auto bg-white">
      <thead className="bg-gray-20 text-[12px] leading-[18px] text-gray-10">
        <tr>
          {LISTING_TABLE_HEAD.map((item, index) => (
            <th key={index} className="text-start px-6 py-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id} className="border-[1px] border-gray-200">
            <td className="min-w-[300px] px-6 py-4">{item.title}</td>
            <td className="min-w-[120px] px-6 py-4">
              <ListingTableLabel type={item.status} />
            </td>
            <td className="min-w-[130px] px-6 py-4">{item.type}</td>
            <td className="min-w-[150px] px-6 py-4">{item.user}</td>
            <td className="min-w-[130px] px-6 py-4">{item.posted}</td>
            <td className="min-w-[160px] px-6 py-4">
              <NumberTextButton
                onUpBtnClick={() => setCurrentValue(item.fee++)}
                onDownBtnClick={() => setCurrentValue(item.fee--)}
                currentValue={item.fee}
              />
            </td>
            <td>
              <ListingAction status={item.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
