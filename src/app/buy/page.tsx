"use client";
import styles from "./page.module.css";
import { BuyComponent, Reviews } from "@/features/buy-page";
import { Footer } from "@/features/footer";
import { useLanguage } from "@/app/providers";

const Page = () => {
    const { language } = useLanguage();
    return (
        <main className={styles.page}>
            <BuyComponent />
            <Reviews
                reviews={[
                    {
                        name: "Alejandra",
                        review:
                            language === "english"
                                ? "The book Art for Everyone helped me improve my strokes and distinguish shades. Now, thanks to this, drawing has become one of my hobbies."
                                : "El libro Arte para todos me ayudó a mejorar mis trazos y diferenciar tonos. Ahora, gracias a esto, dibujar es uno de mis hobbies.",
                        image: "/images/buy-page/profile-pic-1.jpg",
                    },
                    {
                        name: "Patricia",
                        review:
                            language === "english"
                                ? "Art for Everyone helped me discover my drawing skills with its clear exercises. Thank you, Madalith Pareja, for sharing your knowledge."
                                : "El libro Arte para todos me ayudó a descubrir mis habilidades de dibujo con sus ejercicios claros. Gracias, Madalith Pareja, por compartir tu conocimiento.",
                        image: "/images/buy-page/profile-pic-2.jpg",
                    },
                    {
                        name: "Santy",
                        review:
                            language === "english"
                                ? "This book was a great way to get better at the basics of art while having a good time. I recommend it to anyone who wants to start drawing."
                                : "Este libro fue una excelente manera de mejorar en los conceptos básicos del arte mientras se pasa un buen rato. Lo recomiendo a cualquiera que quiera empezar a dibujar.",
                        image: "/images/buy-page/profile-pic-3.jpg",
                    },
                    {
                        name: "Alexandra",
                        review:
                            language === "english"
                                ? "Art for Everyone by Mada is an excellent guide for learning drawing. It is easy to follow, suitable for all ages, and helps unlock hidden artistic skills through step-by-step exercises."
                                : "Arte para Todos de Mada es una excelente guía para aprender a dibujar. Es fácil de seguir, apta para todas las edades y ayuda a despertar habilidades artísticas ocultas con ejercicios graduales.",
                        image: "/images/buy-page/profile-pic-4.jpg",
                    },
                ]}
            />
            <Footer />
        </main>
    );
};

export default Page;
