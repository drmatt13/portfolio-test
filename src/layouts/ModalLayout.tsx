"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
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
    image?: string;
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
          className="rounded-lg border-black/25 backdrop-blur overflow-hidden"
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
          onClick={(e) => e.stopPropagation()}
        >
          {data.title && (
            <div
              className="font-bold text-base md:text-lg"
              style={{
                marginBottom: "0.65rem",
              }}
            >
              {data.title}:
            </div>
          )}
          {data.description && (
            <div
              className="text-sm"
              style={{
                lineHeight: "1.6",
              }}
            >
              {data.description}
            </div>
          )}
          {data.image && (
            <div>
              <img
                src={`/diagrams/blur/${data.image}`} // Default to low-res image
                alt={data.image}
                className="h-full w-full object-cover"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
                onLoad={(e) => {
                  const target = e.currentTarget;
                  target.src = `/diagrams/fullsize/${data.image}`; // Swap to high-res when loaded
                }}
                onError={(e) => {
                  e.currentTarget.src = `/diagrams/blur/${data.image}`; // Fallback to low-res on error
                }}
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
