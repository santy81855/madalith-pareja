import styles from "./page.module.css";
import { PictureSection, AuthorComponent } from "@/features/landing-page";
import { Footer } from "@/features/footer";

export default function Home() {
    return (
        <main className={styles.page}>
            <PictureSection
                title="Arte Para Todos"
                description="Todos podemos convertirnos en artistas, solo debes iniciar el camino."
                reverse={true}
                innerImage="/images/landing-page/book-cover.png"
            />
            <PictureSection
                title="Como Lograrlo?"
                description="El secreto está en educar la mano y la buena observación."
                image="/images/landing-page/black-and-white-background.jpg"
            />
            <AuthorComponent
                name="Madalith Pareja"
                description="Nací en los años 70 en Medellín, Colombia. Para mi madre siempre fue importante cultivar en mí el arte. Desde temprana edad, estuve en diferentes cursos e instituciones, aprendiendo diversas técnicas y todo lo relacionado con el dibujo, de acuerdo a mi edad. Cuando entré en la adolescencia, ingresé al Instituto de Bellas Artes de Medellín. Allí, primero estudié en el taller libre, donde aprendí técnicas de color, forma, texturas y diferentes maneras de expresión artística. Después, cursé 6 semestres de dibujo artístico, donde tuve la oportunidad de aprender figura humana, perspectiva e historia del arte. Inicié a corta edad mis estudios de dibujo publicitario, complementando así todo lo que había aprendido hasta el momento. Tuve la oportunidad de estudiar fotografía y diseño gráfico. Pero en mí siempre estuvo la inquietud por enseñar. Trabajé como dibujante para estampación durante varios años, y luego vino la oportunidad de ser docente. Desde entonces, hace ya más de 25 años, no he parado de enseñar."
                image="/images/landing-page/mada-pic.jpg"
            />
            <Footer />
        </main>
    );
}
