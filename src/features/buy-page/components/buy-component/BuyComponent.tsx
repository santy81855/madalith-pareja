"use client";
import styles from "./BuyComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { starIcon } from "@/lib/Icons";
import { useLanguage } from "@/app/providers";

const BuyComponent = () => {
    const { language } = useLanguage();
    // const quantitySelector = (
    //     <section className={styles.numberSelector}>
    //         <button className={styles.minus}>-</button>
    //         <p className={styles.number}>1</p>
    //         <button className={styles.plus}>+</button>
    //     </section>
    // );

    return (
        <section className={styles.container}>
            <section className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src="/images/landing-page/book-cover.png"
                    alt="book cover"
                    width={400}
                    height={600}
                    quality={70}
                    priority
                />
            </section>
            <section className={styles.colContainer}>
                <section className={styles.titleContainer}>
                    <p className={styles.saleText}>
                        {language === "english" ? "On Sale" : "En Venta"}
                    </p>
                    <h1 className={styles.title}>
                        {language === "english"
                            ? "Art for Everyone"
                            : "Arte para Todos"}
                    </h1>
                    <p className={styles.price}>$22.99</p>
                </section>
                <section className={styles.starsContainer}>
                    <div className={styles.star}>{starIcon}</div>
                    <div className={styles.star}>{starIcon}</div>
                    <div className={styles.star}>{starIcon}</div>
                    <div className={styles.star}>{starIcon}</div>
                    <div className={styles.star}>{starIcon}</div>
                </section>
                <p className={styles.description}>
                    {language === "english"
                        ? "Art for Everyone is a booklet that can be opened flat at a 180-degree angle. It includes two languages: English and Spanish. The booklet follows a proven process that has worked for many people, regardless of age. Of course, you’ll need dedication, effort, and perseverance. In Art for Everyone, you’ll also find everything you need to complete each exercise. This includes a 6B pencil, an HB pencil, 4 dual-tip colored pencils, an eraser, and 10 sheets of special paper at the end of the booklet, so your hard work is showcased in the best way possible."
                        : "Art for Everyone es una cartilla que puede abrirse en un ángulo de 180 grados. ncontrarás dos idiomas en ella: inglés y español. La cartilla contiene un proceso absolutamente comprobado en muchísimas personas de que funciona y no tiene una edad específica. Obviamente, necesitarás dedicación, esfuerzo y perseverancia. En Art for Everyone encontrarás, además, todo lo necesario para llevar a cabo cada uno de los ejercicios propuestos. Esto incluye un lápiz 6B, un lápiz HB, 4 colores de doble punta, un borrador y 10 hojas al final de la cartilla de papel especial para que todo tu esfuerzo se vea reflejado de la mejor manera."}
                </p>
                <section className={styles.rowContainer}>
                    <Link
                        href="https://buy.stripe.com/5kA7uodie1X20qAfYY"
                        className={styles.buyButton}
                    >
                        {language === "english" ? "Buy Now" : "Comprar Ahora"}
                    </Link>
                </section>
            </section>
        </section>
    );
};

export default BuyComponent;
