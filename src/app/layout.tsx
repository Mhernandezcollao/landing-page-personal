import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "May Hernandez Collao - Ingeniera en Computación e Informática",
  description: "Bienvenida a la página de Maryorie Hernandez Collao. Ingeniera en Informática con experiencia en desarrollo fron-end y soluciones tecnológicas innovadoras.",
  keywords: "May Hernandez, Naryorie Hernandez Collao, ingeniera en informática, desarrollo fron-end, soluciones tecnológicas, tecnología",
  authors: [{ name: "Maryorie Hernandez Collao", url: "https://es.wikipedia.org/wiki/Maryorie_Hern%C3%A1ndez" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar/>
        <main>      
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
