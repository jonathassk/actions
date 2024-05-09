export type Language = 'en' | 'pt' | 'es';

interface PortalInterfaceInterface {
    language: Language;
    texts: {
        [key in Language]: {
            [key: string]: string;
        }
    }
}

export const texts: PortalInterfaceInterface['texts'] = {
    en: {   
        HOME: 'HOME',
        ABOUT: 'ABOUT',
        CONTACT: 'CONTACT',
        LOGIN: 'LOGIN',
        SEARCH: 'SEARCH',
    },
    pt: {
        HOME: 'INICIO',
        ABOUT: 'SOBRE',
        CONTACT: 'CONTATO',
        LOGIN: 'ENTRAR',
        SEARCH: 'BUSCAR',
    },
    es: {
        HOME: 'INICIO',
        ABOUT: 'SOBRE',
        CONTACT: 'CONTACTO',
        LOGIN: 'ENTRAR',
        SEARCH: 'BUSCAR',
    },
}
