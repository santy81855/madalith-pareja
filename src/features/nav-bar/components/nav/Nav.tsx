"use client";
import styles from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { useLanguage } from "@/app/providers";
import Toggle from "react-toggle";
import "@/lib/toggle.css";

type navProps = {
    styleProp?: object;
};

const Nav = ({ styleProp }: navProps) => {
    const path = usePathname();
    const [isOpen, setOpen] = useState(false);
    const [languageIsOpen, setLanguageIsOpen] = useState(true);
    const { language, setLanguage } = useLanguage();

    const handleToggleChange = () => {
        if (language === "english") {
            setLanguage("spanish");
        } else {
            setLanguage("english");
        }
    };

    return (
        <nav className={styles.navContainer} style={styleProp ? styleProp : {}}>
            <section className={styles.textContainer}>
                <Link href="/" className={styles.logoContainer}>
                    <Image
                        className={styles.logo}
                        alt="logo"
                        src="/images/logos/logo.png"
                        width={300}
                        height={100}
                        quality={100}
                        priority
                    />
                </Link>

                <section className={styles.hamburgerMenuContainer}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    {isOpen && (
                        <section className={styles.hamburgerMenu}>
                            <Link
                                href="/"
                                className={styles.hamLink}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <p
                                    className={`${styles.hamNavLink} ${
                                        path.length === 1
                                            ? styles.active
                                            : styles.inactive
                                    }`}
                                >
                                    {language === "english" ? "Home" : "Inicio"}
                                </p>
                            </Link>
                            <Link
                                href="/buy"
                                className={styles.hamNavButton}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <p>
                                    {language === "english" ? "Buy" : "Comprar"}
                                </p>
                            </Link>
                            <section className={styles.languageToggle}>
                                <p>
                                    {language === "spanish"
                                        ? "English"
                                        : "English"}
                                </p>
                                <Toggle
                                    defaultChecked={language === "spanish"}
                                    icons={{
                                        checked: null,
                                        unchecked: null,
                                    }}
                                    onChange={handleToggleChange}
                                />
                                <p>
                                    {language === "english"
                                        ? "Spanish"
                                        : "Spanish"}
                                </p>
                            </section>
                        </section>
                    )}
                </section>
                <div className={styles.navItem}>
                    <Link href="/">
                        <p
                            className={`${styles.navLink} ${
                                path.length === 1
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            {language === "english" ? "Home" : "Inicio"}
                        </p>
                    </Link>
                    <Link href="/buy" className={styles.navButton}>
                        <p>{language === "english" ? "Buy" : "Comprar"}</p>
                    </Link>
                    <section className={styles.languageMenuContainer}>
                        <Hamburger
                            toggled={languageIsOpen}
                            toggle={setLanguageIsOpen}
                        />
                        {languageIsOpen && (
                            <section className={styles.languageMenu}>
                                <section className={styles.languageToggle}>
                                    <p>
                                        {language === "spanish"
                                            ? "English"
                                            : "English"}
                                    </p>
                                    <Toggle
                                        defaultChecked={language === "spanish"}
                                        icons={{
                                            checked: null,
                                            unchecked: null,
                                        }}
                                        onChange={handleToggleChange}
                                    />
                                    <p>
                                        {language === "english"
                                            ? "Spanish"
                                            : "Spanish"}
                                    </p>
                                </section>
                            </section>
                        )}
                    </section>
                </div>
            </section>
        </nav>
    );
};

export default Nav;
