import styles from "./PictureSection.module.css";
import Image from "next/image";

type PictureSectionProps = {
    reverse?: boolean;
    image?: string;
    innerImage?: string;
    title: string;
    description: string;
};

const PictureSection = ({
    reverse,
    image,
    innerImage,
    title,
    description,
}: PictureSectionProps) => {
    return (
        <section className={styles.pictureSection}>
            <section
                className={
                    !reverse ? styles.textSectionLeft : styles.textSectionRight
                }
            >
                <section className={styles.textContainer}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </section>
            </section>
            {image ? (
                <section
                    className={reverse ? styles.imageLeft : styles.imageRight}
                >
                    <Image
                        className={styles.image}
                        src={image}
                        alt="image"
                        width={1500}
                        height={500}
                        quality={80}
                        priority
                    />
                </section>
            ) : (
                <section
                    className={
                        reverse
                            ? styles.imageSectionLeft
                            : styles.imageSectionRight
                    }
                >
                    {innerImage ? (
                        <>
                            <Image
                                className={
                                    reverse
                                        ? styles.innerImageLeft
                                        : styles.innerImageRight
                                }
                                src={innerImage}
                                alt="image"
                                width={500}
                                height={500}
                                quality={100}
                                priority
                            />
                            <div className={styles.imageBackdrop}></div>
                        </>
                    ) : null}
                </section>
            )}
        </section>
    );
};

export default PictureSection;
