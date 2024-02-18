import { useState } from "react";

export const useTranslate = ({
    locales = {
        en: {
            key: 'en',
            content: {}
        }
    }
}) => {
    const [locale, updateLocale] = useState(locales.ua);

    const l = (key) => locale.content[key];

    const setLocale = (key) => {
        updateLocale(locales[key]);
    }

    return { l, setLocale, locale }
}