import styles from "./page.module.css";
import { BuyComponent } from "@/features/buy-page";
import { Footer } from "@/features/footer";

const page = () => {
    return (
        <main className={styles.page}>
            <BuyComponent />
            <Footer />
        </main>
    );
};

export default page;
