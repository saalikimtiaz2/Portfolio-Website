import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "../styles/globals.scss";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salik Imtiaz — Frontend Engineer & Web Developer",
  description:
    "Personal portfolio of Salik Imtiaz, a frontend engineer focused on crafting fast, accessible, and beautifully animated web experiences.",
  keywords: [
    "Salik Imtiaz",
    "Frontend Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Salik Imtiaz" }],
  openGraph: {
    title: "Salik Imtiaz — Frontend Engineer",
    description:
      "Frontend engineer crafting fast, accessible, motion-driven web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${grotesk.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink-50 text-ink-950 antialiased dark:bg-ink-950 dark:text-ink-50 font-body selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
