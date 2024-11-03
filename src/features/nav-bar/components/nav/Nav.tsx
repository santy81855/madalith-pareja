"use client";
import styles from "./Nav.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";

type navProps = {
    styleProp?: object;
};

const Nav = ({ styleProp }: navProps) => {
    const path = usePathname();
    const [isOpen, setOpen] = useState(false);

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
                                    Home
                                </p>
                            </Link>
                            <Link
                                href="/about"
                                className={styles.hamLink}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <p
                                    className={`${styles.hamNavLink} ${
                                        path.includes("works")
                                            ? styles.active
                                            : styles.inactive
                                    }`}
                                >
                                    About
                                </p>
                            </Link>
                            <Link
                                href="/contact"
                                className={styles.hamLink}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <p
                                    className={`${styles.hamNavLink} ${
                                        path.includes("contact")
                                            ? styles.active
                                            : styles.inactive
                                    }`}
                                >
                                    Contact
                                </p>
                            </Link>
                            <Link
                                href="/buy"
                                className={styles.hamNavButton}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <p>Buy</p>
                            </Link>
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
                            Home
                        </p>
                    </Link>
                    <Link href="/about">
                        <p
                            className={`${styles.navLink} ${
                                path.includes("about")
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            About
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p
                            className={`${styles.navLink} ${
                                path.includes("contact")
                                    ? styles.active
                                    : styles.inactive
                            }`}
                        >
                            Contact
                        </p>
                    </Link>
                    <Link href="/buy" className={styles.navButton}>
                        <p>Buy</p>
                    </Link>
                </div>
            </section>
        </nav>
    );
};

export default Nav;
