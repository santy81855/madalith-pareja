"use client";
import styles from "./AuthorComponent.module.css";
import Image from "next/image";
import { useLanguage } from "@/app/providers";

type AuthorComponentProps = {
    name: string;
    description: string;
    image: string;
};

const AuthorComponent = ({
    name,
    description,
    image,
}: AuthorComponentProps) => {
    const { language } = useLanguage();
    return (
        <section className={styles.authorComponent}>
            <section className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={image}
                    alt="author"
                    width={900}
                    height={1200}
                    quality={40}
                    priority
                />
            </section>
            <section className={styles.textContainer}>
                <section className={styles.titleContainer}>
                    <p className={styles.title}>
                        {language === "english"
                            ? "Meet the author"
                            : "Conoce al autor"}
                    </p>
                    <p className={styles.name}>{name}</p>
                </section>
                <p className={styles.description}>{description}</p>
                <section className={styles.rowContainer}>
                    <section className={styles.colContainer}>
                        <p className={styles.colTitle}>35+</p>
                        <p className={styles.colText}>
                            {language === "english"
                                ? "Years as an artist"
                                : "Años como artista"}
                        </p>
                    </section>
                    <div className={styles.verticalDivider}></div>
                    <section className={styles.colContainer}>
                        <p className={styles.colTitle}>25+</p>
                        <p className={styles.colText}>
                            {language === "english"
                                ? "Years teaching"
                                : "Años enseñando"}
                        </p>
                    </section>
                </section>
                <section
                    className={`${styles.rowContainer} ${styles.buttonRow}`}
                >
                    <button
                        className={`${styles.buttonSpecial} ${styles.button}`}
                    >
                        {language === "english" ? "Read More" : "Leer Más"}
                    </button>
                </section>
            </section>
        </section>
    );
};

export default AuthorComponent;
