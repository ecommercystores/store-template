import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: any[];
  addItem: (data: any) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: any) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.slug === data.slug
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (slug: string) => {
        set({ items: [...get().items.filter((item) => item.slug !== slug)] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
