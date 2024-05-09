
import { create, UseBoundStore, StoreApi } from 'zustand';
import { NonLoggedDataInterface } from '../interfaces/UserInterfaces';

export const nonLoggedDataImp: UseBoundStore<StoreApi<NonLoggedDataInterface>> = create<NonLoggedDataInterface>((set) => ({
    language: 'EN',
    timezone: 'UTC',
    country: 'US',
    currency: 'USD',
    setLanguage: (language: NonLoggedDataInterface['language']) => set({ language }),
}));
