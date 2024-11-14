"use client";
import styles from "./page.module.css";
import {
    PictureSection,
    AuthorComponent,
    PortraitPhoto,
} from "@/features/landing-page";
import { Footer } from "@/features/footer";
import { useLanguage } from "@/app/providers";

export default function Home() {
    const { language } = useLanguage();
    return (
        <main className={styles.page} id="landing-page">
            <PictureSection
                title={
                    language === "english"
                        ? "Art for Everyone"
                        : "Arte Para Todos"
                }
                description={
                    language === "english"
                        ? "Anyone can become an artist, you just need to start"
                        : "Todos podemos convertirnos en artistas, solo debes iniciar el camino."
                }
                reverse={true}
                innerImage="/images/landing-page/book-cover.png"
            />
            <PictureSection
                title={
                    language === "english" ? "How to do it?" : "Como Lograrlo?"
                }
                description={
                    language === "english"
                        ? "The secret is in being observational and learning how to use your hand."
                        : "El secreto está en educar la mano y la buena observación."
                }
                image="/images/landing-page/black-and-white-background.jpg"
            />
            <PortraitPhoto
                title={
                    language === "english"
                        ? "Learn About the Colors"
                        : "Aprende Sobre Colores"
                }
                text={
                    language === "english"
                        ? "Learn how to draw a still life and how to mix colors or create an art piece using only a single color."
                        : "Aprende a dibujar un bodegón y a mezclar colores o a crear una obra de arte utilizando un solo color."
                }
                image="/images/landing-page/bodegon.jpeg"
            />
            <AuthorComponent
                name="Madalith Pareja"
                description={
                    language === "english"
                        ? "I was born in the 70s in Medellín, Colombia. My mother always felt it was important to nurture my love for art. From a young age, I took part in different courses and workshops, learning various techniques and everything related to drawing that was appropriate for my age. When I became a teenager, I joined the Institute of Fine Arts in Medellín. I started in the open studio program, where I learned about color, form, textures, and different ways of artistic expression. Later, I completed six semesters of artistic drawing, focusing on human figure studies, perspective, and art history. I also began studying advertising drawing at a young age, building on everything I had learned so far. I got the chance to study photography and graphic design as well. But I always felt a strong calling to teach. I worked as a designer for print for several years before I got my first opportunity to become a teacher. Since then, over 25 years ago, I haven’t stopped teaching."
                        : "Nací en los años 70 en Medellín, Colombia. Para mi madre siempre fue importante cultivar en mí el arte. Desde temprana edad, estuve en diferentes cursos e instituciones, aprendiendo diversas técnicas y todo lo relacionado con el dibujo, de acuerdo a mi edad. Cuando entré en la adolescencia, ingresé al Instituto de Bellas Artes de Medellín. Allí, primero estudié en el taller libre, donde aprendí técnicas de color, forma, texturas y diferentes maneras de expresión artística. Después, cursé 6 semestres de dibujo artístico, donde tuve la oportunidad de aprender figura humana, perspectiva e historia del arte. Inicié a corta edad mis estudios de dibujo publicitario, complementando así todo lo que había aprendido hasta el momento. Tuve la oportunidad de estudiar fotografía y diseño gráfico. Pero en mí siempre estuvo la inquietud por enseñar. Trabajé como dibujante para estampación durante varios años, y luego vino la oportunidad de ser docente. Desde entonces, hace ya más de 25 años, no he parado de enseñar."
                }
                image="/images/landing-page/mada-pic.jpg"
            />
            <Footer />
        </main>
    );
}
