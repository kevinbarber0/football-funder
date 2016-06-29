import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "App/reducers";
import { useExpired } from "./useExpired";

interface Props {
  gate: "main";
  children: React.ReactNode;
}

export function ExpiryGuard(props: Props) {
  const { gate, children } = props;
  const { isExpired } = useExpired();
  const dispatch = useDispatch();
  const history = useNavigate();
  const authTimeStamp = useSelector((state: AppState) => state.auth.timestamp);

  if (gate === "main") {
    if (authTimeStamp === undefined || isExpired(authTimeStamp)) {
      dispatch({ type: "RESET" });
      history("/login");
    }
  }

  return <>{children}</>;
}
