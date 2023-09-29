import { create } from "zustand";
import { InfoCampaing } from "../types";
import { persist } from "zustand/middleware";
import { getfetchCampaings } from "../service/fetchCampaings";

interface State {
  campaings: InfoCampaing[];
  currentCampaing: number;
  fetchCampaings: () => Promise<void>;
  goNextCampaing: () => void;
  goPreviousCampaing: () => void;
  reset: () => void;
}

export const useCampaingStore = create<State>()(
  //Persistencia de datos del middleware campaings en el localStorage
  persist(
    (set, get) => {
      return {
        campaings: [], //Este lo actualizamos en el set
        currentCampaing: 0, //Campaña en el index 0
        fetchCampaings: async () => {
          const campaings = await getfetchCampaings();
          set({ campaings });
        },

        goNextCampaing: () => {
          const { currentCampaing, campaings } = get();
          const nextCampaing = currentCampaing + 1;

          if (nextCampaing < campaings.length) {
            set({ currentCampaing: nextCampaing });
          }
        },

        goPreviousCampaing: () => {
          const { currentCampaing } = get();
          const previousCampaing = currentCampaing - 1;

          if (previousCampaing >= 0) {
            set({ currentCampaing: previousCampaing });
          }
        },

        reset: () => {
          set({ currentCampaing: 0, campaings: [] });
        },
      };
    },
    {
      name: "campaings",
    }
  )
);
