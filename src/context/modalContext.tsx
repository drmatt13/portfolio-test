import { StaticImageData } from "next/image";
import { createContext, Dispatch, SetStateAction } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  data: {
    title?: string;
    description?: string;
    image?: StaticImageData;
    alt?: string;
  };
  setData: Dispatch<
    SetStateAction<{
      title?: string;
      description?: string;
      image?: StaticImageData;
      alt?: string;
    }>
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
    alt: undefined,
  },
  setData: () => {},
});

export default ModalContext;
