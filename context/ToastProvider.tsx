import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastContextProps {
  toast: ToastState;
  triggerToast: (message: string, type?: ToastType, duration?: number) => void;
}

interface ToastState {
  message: string;
  type: ToastType;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastState>({
    message: "",
    type: "success",
  });

  const triggerToast = useCallback(
    (message: string, type: ToastType = "success", duration: number = 3000) => {
      setToast({ message, type });
      setTimeout(() => setToast({ message: "", type: "success" }), duration);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast, triggerToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => triggerToast("", "success")}
      />
    </ToastContext.Provider>
  );
};

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`toast z-40 toast-top toast-center md:toast-start md:toast-bottom w-full ${type}`}
    >
      <div
        className={`alert bg-[#191E24] text-white flex items-center text-pretty max-w-full md:max-w-xl w-fit mx-auto md:mx-0`}
      >
        <span>{message}</span>
        <button onClick={onClose}>✕</button>
      </div>
    </div>
  );
};
