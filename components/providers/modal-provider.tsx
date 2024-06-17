"use client";
import { useEffect, useState } from "react";
import SettingsModal from "@/components/modals/setting-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SettingsModal />
    </>
  );
};

export default ModalProvider;