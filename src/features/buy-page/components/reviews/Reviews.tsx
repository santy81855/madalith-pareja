"use client";
import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/app/providers";
import { starIcon } from "@/lib/Icons";

type ReviewsProps = {
    reviews: {
        name: string;
        review: string;
        image: string;
    }[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [reviews.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
        );
    };

    const colorArray = ["#ffd400", "#fe7e0f", "	#8e3ccb", "	#00ffd2"];

    // Variants for animation
    const variants = {
        center: {
            scale: 1.2,
            rotateY: 0,
            x: "0%",
            zIndex: 2,
            opacity: 1,
        },
        left: {
            scale: 0.8,
            rotateY: 30,
            x: "-40%",
            zIndex: 1,
            opacity: 0.5,
        },
        right: {
            scale: 0.8,
            rotateY: -30,
            x: "40%",
            zIndex: 1,
            opacity: 0.5,
        },
        hidden: {
            opacity: 0,
            zIndex: 0,
        },
    };

    // Helper function to determine the position of each item
    const getPosition = (index: number) => {
        const offset = (index - currentIndex + reviews.length) % reviews.length;
        if (offset === 0) return "center";
        if (offset === 1 || offset === -reviews.length + 1) return "right";
        if (offset === reviews.length - 1 || offset === -1) return "left";
        return "hidden";
    };

    return (
        <div className={styles.reviewContainer}>
            <AnimatePresence initial={false}>
                {reviews.map((review, index) => (
                    <motion.div
                        className={styles.review}
                        key={index}
                        variants={variants}
                        initial="hidden"
                        animate={getPosition(index)}
                        exit="hidden"
                        transition={{ duration: 0.5 }}
                        style={{ backgroundColor: colorArray[index] }}
                    >
                        <section className={styles.imageContainer}>
                            <div
                                className={styles.backSplash}
                                style={{
                                    backgroundColor:
                                        colorArray[
                                            index + (1 % colorArray.length)
                                        ],
                                }}
                            ></div>
                            <Image
                                className={styles.image}
                                src={review.image}
                                alt="review"
                                width={500}
                                height={500}
                                quality={50}
                                priority
                            />
                            <section className={styles.starsContainer}>
                                <div className={styles.star}>{starIcon}</div>
                                <div className={styles.star}>{starIcon}</div>
                                <div className={styles.star}>{starIcon}</div>
                                <div className={styles.star}>{starIcon}</div>
                                <div className={styles.star}>{starIcon}</div>
                            </section>
                            <p className={styles.name}>{review.name}</p>
                        </section>

                        <section className={styles.textContainer}>
                            <div className={styles.horLine}></div>
                            <p className={styles.reviewTitle}>
                                {language === "english"
                                    ? "Review"
                                    : "Comentario"}
                            </p>
                            <section className={styles.reviewTextContainer}>
                                <p className={styles.text}>{review.review}</p>
                            </section>
                        </section>
                    </motion.div>
                ))}
            </AnimatePresence>
            {/* Navigation buttons */}
            <button
                onClick={prevSlide}
                className={styles.buttonLeft}
                style={{ color: colorArray[currentIndex] }}
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className={styles.buttonRight}
                style={{ color: colorArray[currentIndex] }}
            >
                &gt;
            </button>
        </div>
    );
};

export default Reviews;
