"use client";

import { createContext, useState, useEffect, useContext } from "react";

export const LanguageContext = createContext({
    language: "english" as string | null,
    setLanguage: (language: string) => {
        console.log("language", language);
    },
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage);
            } else {
                setLanguage("english");
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && language) {
            localStorage.setItem("language", language);
        }
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
