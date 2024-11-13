"use client";

import { createContext, useState, useEffect, useContext } from "react";

export const LanguageContext = createContext({
    language: "english",
    setLanguage: (language: string) => {
        console.log("language", language);
    },
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState("english");

    useEffect(() => {
        const storedLanguage = window.localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

export const useSetLanguage = () => {
    const { setLanguage } = useLanguage();
    return setLanguage;
};

export default LanguageProvider;
