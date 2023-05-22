import { useContext } from "react";
import { DataContext } from "../context/DataContexts";

export const useModal = (props) => {
  const { isOpen, setIsOpen, modalInfo, setModalInfo } =
    useContext(DataContext);
  const handleModal = () => {
    const b = setModalInfo(props);
    setIsOpen((prevIsOpen) => {
      setIsOpen(!prevIsOpen);
      prevIsOpen ? setModalInfo(null) : setModalInfo(props);
    });
  };

  return handleModal;
};
