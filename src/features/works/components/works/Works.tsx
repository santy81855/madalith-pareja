import styles from "./Works.module.css";
import Image from "next/image";

const Works = () => {
    const mobileArray = [
        {
            title: "Web Applications",
            text: "We build interactive web applications that are user-friendly and visually appealing. Our team of developers and designers work together to create a seamless experience for your users.",
            url: "/images/works-page/myresumehero-photo.png",
        },
        {
            title: "Web Design",
            text: "Your website is the first impression that many people will have of your business. We design websites that are visually appealing and easy to navigate. Our team of designers will work with you to create a website that reflects your brand and engages your audience.",
            url: "/images/works-page/aicapella-photo.png",
        },
        {
            title: "Company Websites",
            text: "We specialize in building websites for small businesses. Our team of designers and developers will work with you to create a website that reflects your brand and engages your audience. We offer a range of services, including web design and web development.",
            url: "/images/works-page/welcome-pets-photo.png",
        },
    ];
    const desktopArray = [
        {
            title: "Web Applications",
            text: "We build interactive web applications that are user-friendly and visually appealing. Our team of developers and designers work together to create a seamless experience for your users.",
            url: "/images/works-page/aicapella-photo.png",
        },
        {
            title: "Company Websites",
            text: "We specialize in building websites for small businesses. Our team of designers and developers will work with you to create a website that reflects your brand and engages your audience. We offer a range of services, including web design and web development.",
            url: "/images/works-page/myresumehero-photo.png",
        },
        {
            title: "Web Design",
            text: "Your website is the first impression that many people will have of your business. We design websites that are visually appealing and easy to navigate. Our team of designers will work with you to create a website that reflects your brand and engages your audience.",
            url: "/images/works-page/welcome-pets-photo.png",
        },
    ];

    return (
        <section className={styles.projectsContainer}>
            <h1 className={styles.title}>What We Do</h1>
            <p className={styles.quote}></p>

            <section className={styles.grid}>
                {/* About Us Section */}
                <section className={styles.card}>
                    <h2>{desktopArray[0].title}</h2>
                    <p>{desktopArray[0].text}</p>
                </section>
                <section className={styles.mobileCard}>
                    <h2>{mobileArray[0].title}</h2>
                    <p>{mobileArray[0].text}</p>
                </section>

                {/* Image */}
                <section className={styles.imageWrapper}>
                    <Image
                        className={`${styles.image} ${styles.mobileImage}`}
                        src={mobileArray[0].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className={`${styles.image} ${styles.desktopImage}`}
                        src={desktopArray[0].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                </section>

                {/* Our Strategy Section */}
                <section className={styles.card}>
                    <h2>{desktopArray[1].title}</h2>
                    <p>{desktopArray[1].text}</p>
                </section>
                <section className={styles.mobileCard}>
                    <h2>{mobileArray[1].title}</h2>
                    <p>{mobileArray[1].text}</p>
                </section>

                {/* Second Image */}
                <section className={styles.imageWrapper}>
                    <Image
                        className={`${styles.image} ${styles.mobileImage}`}
                        src={mobileArray[1].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className={`${styles.image} ${styles.desktopImage}`}
                        src={desktopArray[1].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                </section>

                {/* Our Mission Section */}
                <section className={styles.missionCard}>
                    <h2>{desktopArray[2].title}</h2>
                    <p>{desktopArray[2].text}</p>
                </section>
                <section className={styles.mobileCard}>
                    <h2>{mobileArray[2].title}</h2>
                    <p>{mobileArray[2].text}</p>
                </section>

                {/* Third Image */}
                <section className={styles.imageWrapper}>
                    <Image
                        className={`${styles.image} ${styles.mobileImage}`}
                        src={mobileArray[2].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className={`${styles.image} ${styles.desktopImage}`}
                        src={desktopArray[2].url}
                        alt="Sample Image"
                        width={1000}
                        height={1000}
                    />
                </section>
            </section>
        </section>
    );
};

export default Works;
