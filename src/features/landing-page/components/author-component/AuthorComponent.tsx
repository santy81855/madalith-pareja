import styles from "./AuthorComponent.module.css";
import Image from "next/image";

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
                    <p className={styles.title}>Meet the author</p>
                    <p className={styles.name}>{name}</p>
                </section>
                <p className={styles.description}>{description}</p>
                <section className={styles.rowContainer}>
                    <section className={styles.colContainer}>
                        <p className={styles.colTitle}>20+</p>
                        <p className={styles.colText}>Years as an artist</p>
                    </section>
                    <div className={styles.verticalDivider}></div>
                    <section className={styles.colContainer}>
                        <p className={styles.colTitle}>20+</p>
                        <p className={styles.colText}>Years as an artist</p>
                    </section>
                </section>
                <section
                    className={`${styles.rowContainer} ${styles.buttonRow}`}
                >
                    <button
                        className={`${styles.buttonSpecial} ${styles.button}`}
                    >
                        Read More
                    </button>
                    <button className={styles.button}>Contact</button>
                </section>
            </section>
        </section>
    );
};

export default AuthorComponent;
