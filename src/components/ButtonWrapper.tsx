"use client";

import { useContext } from "react";

// context
import modalContext from "@/context/modalContext";
import { StaticImageData } from "next/image";

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  data?: {
    title?: string;
    description?: string;
    image?: StaticImageData;
    imageKey?: string;
    blurDataURL?: string;
    imageHeight?: number;
    imageWidth?: number;
  };
}

const ButtonWrapper = ({
  children,
  className,
  disabled = false,
  data = {
    title: "",
    description: "",
    image: undefined,
    blurDataURL: "",
    imageKey: "",
    imageHeight: 0,
    imageWidth: 0,
  },
}: Props) => {
  const { openModal, isOpen, setData } = useContext(modalContext);

  return (
    <div
      className={`${isOpen ? "z-0" : "z-10"} ${className}`}
      onClick={
        !disabled
          ? () => {
              setData(data);
              openModal();
            }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
