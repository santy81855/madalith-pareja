import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
    style?: React.CSSProperties;
};

const Footer = ({ style }: FooterProps) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer} style={style}>
            <div className={styles.footerList}>
                <p className={styles.footerTitle}>
                    © {currentYear} Madalith Pareja
                </p>
                <p>Madalithpareja@yahoo.es</p>
                <p>770-789-7611</p>
            </div>
        </footer>
    );
};

export default Footer;
