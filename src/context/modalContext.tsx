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
    imageKey?: string;
    blurDataURL?: string;
    imageHeight?: number;
    imageWidth?: number;
  };
  setData: Dispatch<
    SetStateAction<{
      title?: string;
      description?: string;
      image?: StaticImageData;
      imageKey?: string;
      blurDataURL?: string;
      imageHeight?: number;
      imageWidth?: number;
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
    imageKey: undefined,
    blurDataURL: undefined,
  },
  setData: () => {},
});

export default ModalContext;
