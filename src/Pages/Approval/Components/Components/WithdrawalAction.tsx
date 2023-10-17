import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface WithdrawalActionPropsType {
  status: number;
}

export const WithdrawalAction: React.FC<WithdrawalActionPropsType> = ({
  status,
}) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  useEffect(() => {
    if (status === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [status]);

  return (
    <button
      className={classNames(
        "darkGreenButtonText bg-green-10 py-2.5 px-5 rounded-10",
        disabled ? "opacity-50" : ""
      )}
    >
      Sent
    </button>
  );
};
