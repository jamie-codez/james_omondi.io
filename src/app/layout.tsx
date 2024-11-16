import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import "../styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    fallback: ["monospace"],
})

export const metadata: Metadata = {
    title: "Jamie Omondi",
    description: "Jamie Omondi Portfolio Website.",
};

interface RootLayoutProps {
    children?: React.ReactNode;
}

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({children}) => {
    return (
        <html lang="en">
        <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}

export default RootLayout
