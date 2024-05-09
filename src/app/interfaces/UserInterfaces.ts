type Language = 'EN' | 'PT' | 'ES';

export interface NonLoggedDataInterface {
    language: Language;
    timezone: string;
    country: string;
    currency: string;
    setLanguage: (language: NonLoggedDataInterface['language']) => void;
}
