import { create } from 'zustand';

  
interface PreviewModalCheckout {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePreviewModalCheckout = create<PreviewModalCheckout>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModalCheckout;