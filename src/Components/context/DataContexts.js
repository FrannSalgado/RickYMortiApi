import React, { createContext, useState } from "react";
import { useModal } from "../Hooks/useModal";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  return (
    <DataContext.Provider
      value={{
        isOpen,
        setIsOpen,
        modalInfo,
        setModalInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
