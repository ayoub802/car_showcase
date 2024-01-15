"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";
import PreviewModalcheckout from "@components/preview_checkout";

export const PreviewModalCheckoutProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModalcheckout />
    </>
  );
}
