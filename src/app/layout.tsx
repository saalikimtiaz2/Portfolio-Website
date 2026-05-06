import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import IntroLoader from "@/components/IntroLoader";
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

const ogTitle = "SALIK IMTIAZ — Frontend Engineer";
const ogDescription =
  "Frontend engineer crafting fast, accessible, motion-driven web experiences.";

function metadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      return new URL(
        explicit.startsWith("http") ? explicit : `https://${explicit}`
      );
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: metadataBase(),
  title: "Salik Imtiaz | Frontend Engineer",
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
  twitter: {
    card: "summary_large_image",
    creator: "@salik__imtiaz",
    site: "@salik__imtiaz",
    title: ogTitle,
    description: ogDescription,
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: "website",
    siteName: "Salik Imtiaz",
    locale: "en_US",
    url: "/",
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
        <IntroLoader />
        {children}
      </body>
    </html>
  );
}
