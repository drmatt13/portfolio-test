import { createContext, Dispatch, SetStateAction } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  data: {
    title?: string;
    description?: string;
    image?: string;
  };
  setData: Dispatch<
    SetStateAction<{ title?: string; description?: string; image?: string }>
  >;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  data: {
    title: undefined,
    description: undefined,
    image: undefined,
  },
  setData: () => {},
});

export default ModalContext;
