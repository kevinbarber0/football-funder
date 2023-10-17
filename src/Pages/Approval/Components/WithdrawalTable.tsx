import React, { useState } from "react";

import { WITHDRAWAL_TABLE_HEAD } from "Config";
import { WithdrawalApprovalDataType } from "types";
import {
  AccountDetail,
  WithdrawalTableLabel,
  WithdrawalAction,
} from "./Components";

interface ApprovalTablePropsType {
  tableData: WithdrawalApprovalDataType;
}

export const WithdrawalTable: React.FC<ApprovalTablePropsType> = ({
  tableData,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentValue, setCurrentValue] = useState<number | undefined>();

  return (
    <table className="w-full table-auto bg-white">
      <thead className="bg-gray-20 text-[12px] leading-[18px] text-gray-10">
        <tr>
          {WITHDRAWAL_TABLE_HEAD.map((item, index) => (
            <th key={index} className="text-start px-6 py-4">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id} className="border-[1px] border-gray-200">
            <td className="min-w-[300px] px-6 py-4">
              <div className="w-[300px]">{item.title}</div>
            </td>
            <td className="min-w-[120px] px-6 py-4">
              <WithdrawalTableLabel type={item.status} />
            </td>
            <td className="min-w-[130px] px-6 py-4">{item.type}</td>
            <td className="min-w-[150px] px-6 py-4">{item.user}</td>
            <td className="min-w-[130px] px-6 py-4">
              £ {item.amount.toLocaleString("en-US")}
            </td>
            <td className="min-w-[300px] px-6 py-4">
              <AccountDetail
                code={item.sortCode}
                name={item.bankAccountName}
                number={item.accountNumber}
              />
            </td>
            <td className="px-6 py-4">
              <WithdrawalAction status={item.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
