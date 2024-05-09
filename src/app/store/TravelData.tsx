import { create } from 'zustand';

interface TravelData {
  cityOrigin: string | null | undefined;
  cityDestination: string;
  departureDate: string  | null | undefined;
  returnDate: string | null | undefined;
  passengers: number;
  dailyBudget: number;
}

const useTravelData = create((set) => ({
  return: {
    state: {
      travelData: {
        cityOrigin: null,
        cityDestination: '',
        departureDate: null,
        returnDate: null,
        passengers: 1,
        dailyBudget: 0,
      } as TravelData,
    },
    dispatch: {
      setTravelData: (travel: TravelData) => set((state: { travelData: any; }) => ({ travelData: [...state.travelData, travel] })),
    }
  }
}));