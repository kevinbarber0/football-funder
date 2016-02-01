import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

type position =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left"
  | "top-right";
type VariantType = "info" | "success" | "error" | "default" | "warning";
export interface StatusStore {
  showStatus: (msg: string, type?: VariantType, position?: position) => void;
}

const placeholder = {} as StatusStore;
export const StatusContext = createContext<StatusStore>(placeholder);

export function StatusProvider(props: Props) {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<VariantType>("info");
  const [position, setPosition] = useState<position>("bottom-left");

  useEffect(() => {
    if (message !== "") {
      if (type === "error") {
        toast.error(`${message}`, {
          position: position,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success(`${message}`, {
          position: position,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }, [message, position, type]);

  const showStatus = (
    msg: string,
    type: VariantType = "success",
    position: position = "bottom-left"
  ) => {
    setType(type);
    setPosition(position);
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 200);
  };

  return (
    <StatusContext.Provider value={{ showStatus }}>
      <>{props.children}</>
    </StatusContext.Provider>
  );
}
