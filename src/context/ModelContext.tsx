import React, { createContext, useContext, useState } from "react";

const ModalContext = React.createContext<any>({});

export const ModalContextProvider = ({ children }: { children: any }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const showModal = () => {
    setIsVisible(true);
    setData(data);
  };

  const value = { showModal };
  return (
    <ModalContext.Provider value={value}>
      <div className="relative">{children}</div>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return React.useContext(ModalContext);
};
