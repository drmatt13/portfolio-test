"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import ModalContext from "@/context/modalContext";

interface ModalLayoutProps {
  children: React.ReactNode;
}
const ModalLayout = ({ children }: ModalLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const [data, setData] = useState<{
    title?: string;
    description?: string;
    image?: StaticImageData;
    blurDataURL?: string;
    imageKey?: string;
    imageHeight?: number;
    imageWidth?: number;
  }>({});

  const timeOutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isOpen) clearTimeout(timeOutRef.current);
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, data, setData }}
    >
      <div
        className={`${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } absolute top-0 left-0 w-full h-dvh bg-black/50 backdrop-blur flex justify-center items-center`}
        style={{
          zIndex: 20,
          opacity: isOpen ? 1 : 0,
          transition: "opacity 0.25s",
        }}
        onClick={() => {
          closeModal();
          timeOutRef.current = setTimeout(() => {
            setData({});
          }, 250);
        }}
      >
        <div
          className={`${
            data.description && "backdrop-blur rounded-lg"
          } border-black/25 /overflow-hidden`}
          style={{
            maxWidth: "90vw",
            height: "max-content",
            width: !data.description ? "" : "40rem",
            backgroundColor: !data.description ? "" : "#FFFd",
            paddingLeft: !data.description ? "" : "1.25rem",
            paddingRight: !data.description ? "" : "1.25rem",
            paddingTop: !data.description ? "" : "1rem",
            paddingBottom: !data.description ? "" : "1rem",
          }}
          onClick={(e) => data.description && e.stopPropagation()}
        >
          {data.title && (
            <div
              className="font-bold text-base md:text-lg"
              style={{
                marginBottom: "0.75rem",
              }}
            >
              {data.title}:
            </div>
          )}
          {data.description && (
            <div
              className="text-xs"
              style={{
                lineHeight: "1.625",
              }}
            >
              {data.description}
            </div>
          )}
          {data.imageKey && data.blurDataURL && (
            <div
              className="relative /overflow-hidden"
              style={{
                width: "90vw",
                height: "90vh",
              }}
            >
              <Image
                onClick={(e) => e.stopPropagation()}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  boxShadow: "0 0.2rem 1rem 0.1rem #0008",
                }}
                width={data.imageWidth}
                height={data.imageHeight}
                src={data.image as any}
                alt={data.imageKey}
                placeholder="blur"
                blurDataURL={data.blurDataURL as string}
                sizes="(max-width: 640px) 90vw,
                  (max-width: 1024px) 90vw,
                  (max-width: 1280px) 90vw,
                  (max-width: 1536px) 90vw,
                  1800px"
              />
            </div>
          )}
        </div>
      </div>

      {children}
    </ModalContext.Provider>
  );
};

export default ModalLayout;
