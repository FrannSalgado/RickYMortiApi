import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [IsOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [SearchBarInfo, setSearchBarInfo] = useState([]);
  const [InputText, SetInputText] = useState("");

  const handleSearchBar = () => {
    setIsOpenSearchBar((IsOpenSearchBar) => {
      return !IsOpenSearchBar;
    });
  };

  const handleModal = (props) => {
    setModalInfo(props);
    setIsOpen((prevIsOpen) => {
      setIsOpen(!prevIsOpen);
    });
  };

  return (
    <DataContext.Provider
      value={{
        modalInfo,
        handleModal,
        isOpen,
        IsOpenSearchBar,
        handleSearchBar,
        SearchBarInfo,
        SetInputText,
        InputText,
        setSearchBarInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
