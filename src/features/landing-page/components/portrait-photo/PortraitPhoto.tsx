"use client";

import styles from "./PortraitPhoto.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useEffect, useState } from "react";

type PortraitPhotoProps = {
    title: string;
    text: string;
    image: string;
};

const PortraitPhoto = ({ title, text, image }: PortraitPhotoProps) => {
    /* effect to add scroll animation but it is broken on mobile safari
    const [elementProgressY, setElementProgressY] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const element = document.getElementById("element");
            const container = document.getElementById("landing-page");
            if (element && container) {
                // when topPosition = 0, the top of the element is at the bottom of the page
                const topPosition =
                    element.getBoundingClientRect().top -
                    container.clientHeight -
                    container.getBoundingClientRect().top;
                // as the element moves up, the topPosition becomes more negative
                // once the topPosition == element height, the animation should be complete

                if (topPosition * -1 > element.getBoundingClientRect().height) {
                    setElementProgressY(1);
                    return;
                }

                setElementProgressY(
                    (-1 * topPosition) / element.getBoundingClientRect().height
                );
            }
        };
        document
            .getElementById("landing-page")
            ?.addEventListener("scroll", onScroll);

        return () =>
            document
                .getElementById("landing-page")
                ?.removeEventListener("scroll", onScroll);
    }, []);
    */

    return (
        <section className={styles.container} id="element">
            <div className={styles.textContainer}>
                <p>{title}</p>
            </div>
            <motion.div
                className={styles.contentContainer}
                /*
                initial={{ y: "-100%" }}
                style={{ y: `${-100 + elementProgressY * 100}%` }}
                */
            >
                <motion.div className={styles.description}>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </motion.div>
                <motion.div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={image}
                        alt="portrait"
                        width={400}
                        height={550}
                        quality={50}
                        priority
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortraitPhoto;
