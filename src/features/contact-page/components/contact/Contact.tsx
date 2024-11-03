"use client";

import styles from "./Contact.module.css";
import LoadingScreen from "@/components/loading-screen/LoadingScreen";
import Image from "next/image";
import { send } from "@/actions/email";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("here");
        e.preventDefault();
        setLoading(true);
        try {
            await send({
                name: "",
                email,
                content: message,
            });
            console.log("here");
            toast.success(
                "Message sent! We will get back to you as soon as possible."
            );
        } catch (e) {
            console.log("error: ", e);
            toast.error("Message failed to send");
        }
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section className={styles.contactContainer}>
            <section className={styles.contactBanner}>
                <section className={styles.titleContainer}>
                    <h1 className={styles.contactTitle}>Get in touch</h1>
                    <p className={styles.contactSubtitle}>
                        We would love to hear from you. Please reach out to us
                        with any questions or comments.
                    </p>
                </section>
                <section className={styles.imageContainer}>
                    <Image
                        className={styles.contactImage}
                        src="/images/contact-page/contact-photo.png"
                        alt="Contact"
                        width={800}
                        height={400}
                    />
                </section>
            </section>
            <section className={styles.contactInfoContainer}>
                {loading && <LoadingScreen />}
                <section className={styles.contactForm}>
                    <form
                        className={styles.formContainer}
                        onSubmit={handleSubmit}
                    >
                        <section className={styles.inputItem}>
                            <label className={styles.formLabel} htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className={styles.formInput}
                                type="text"
                                placeholder="Full Name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </section>
                        <section className={styles.inputItem}>
                            <label className={styles.formLabel} htmlFor="email">
                                Email
                            </label>
                            <input
                                className={styles.formInput}
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </section>
                        <section className={styles.inputItem}>
                            <label
                                className={styles.formLabel}
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className={styles.formInput}
                                placeholder="Message"
                                id="message"
                                rows={10}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </section>
                        <button className={styles.formButton} type="submit">
                            Contact Us
                        </button>
                    </form>
                </section>
                <div className={styles.divider}></div>
                <section className={styles.contactDetails}>
                    <section className={styles.contactDetail}>
                        <p className={styles.formLabel}>Phone:</p>
                        <p className={styles.contactText}>770-789-7623</p>
                    </section>
                    <section className={styles.contactDetail}>
                        <p className={styles.formLabel}>Email:</p>
                        <p className={styles.contactText}>
                            example-email@gmail.com
                        </p>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default Contact;
