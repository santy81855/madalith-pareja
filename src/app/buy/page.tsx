import styles from "./page.module.css";
import { BuyComponent } from "@/features/buy-page";

const page = () => {
    return (
        <main className={styles.page}>
            <BuyComponent />
        </main>
    );
};

export default page;
