import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "../features/nav-bar";
import styles from "./layout.module.css";
import LanguageProvider from "./providers";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Art for Everyone",
    description:
        "Art for Everyone is a way for people of all skill levels to enjoy art.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <LanguageProvider>
                    <div className={styles.pageLayout}>
                        <Nav styleProp={{ backgroundColor: "white" }} />
                        {children}
                    </div>
                </LanguageProvider>
            </body>
        </html>
    );
}
