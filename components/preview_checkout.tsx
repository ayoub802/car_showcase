"use client";

import Modal from "./ui/preview-modal";
import { CheckoutModale } from "./checkoutDetail";
import usePreviewModalCheckout from "@hooks/use-preview-checkout";


const PreviewModalcheckout = () => {
  const previewModal = usePreviewModalCheckout();

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <CheckoutModale />
    </Modal>
  );
}
 
export default PreviewModalcheckout;