import styles from "./BuyComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { starIcon } from "@/lib/Icons";

const BuyComponent = () => {
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
                    quality={100}
                />
            </section>
            <section className={styles.colContainer}>
                <section className={styles.titleContainer}>
                    <p className={styles.saleText}>On Sale</p>
                    <h1 className={styles.title}>Art for Everyone</h1>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    vehicula, libero sit amet fermentum, lectus nisi suscipit,
                    ac suscipit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vivamus lacinia odio vitae vestibulum
                    vestibulum. Cras vehicula, libero sit amet fermentum, lectus
                    nisi suscipit, ac suscipit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vivamus lacinia odio vitae
                    vestibulum vestibulum. Cras vehicula, libero sit amet
                    fermentum, lectus nisi suscipit, ac suscipit.
                </p>
                <section className={styles.rowContainer}>
                    <Link
                        href="https://buy.stripe.com/5kA7uodie1X20qAfYY"
                        className={styles.buyButton}
                    >
                        Buy Now
                    </Link>
                </section>
            </section>
        </section>
    );
};

export default BuyComponent;
