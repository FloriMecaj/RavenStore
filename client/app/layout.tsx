import type { Metadata } from "next";
import { Cinzel_Decorative, Noto_Serif_JP } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/lib/data";
import "@/styles/globals.css";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel"
});

const noto = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ravenstore.al"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description:
    "Anime jewelry, moody café energy, and late-night gothic atmosphere in the heart of Tirana.",
  icons: {
    icon: "/images/logo-placeholder.svg",
    shortcut: "/images/logo-placeholder.svg",
    apple: "/images/logo-placeholder.svg"
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Step into a secret late-night anime world with jewelry, coffee, desserts, and crimson atmosphere.",
    images: ["/images/logo-placeholder.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${noto.variable} bg-[var(--bg-primary)] text-[var(--text-primary)]`}>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main className="min-h-screen pt-24">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
