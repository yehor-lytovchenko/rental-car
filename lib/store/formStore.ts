import { CarForm } from "@/types/form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FormDraftStore = {
  draft: CarForm;
  setDraft: (form: CarForm) => void;
  clearDraft: () => void;
};

const initialDraft: CarForm = {
  userName: "",
  userEmail: "",
  userText: "",
  userDate: "",
};

export const useFormDraftStore = create<FormDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (form) => set(() => ({ draft: form })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "car-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
