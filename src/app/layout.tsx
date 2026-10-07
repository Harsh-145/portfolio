import type { Metadata, Viewport } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { seoConfig } from "@/content/seo";
import { siteConfig } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
export const viewport: Viewport = {
  themeColor: "#f7f8f4",
  colorScheme: "light",
};
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { template: `%s | ${siteConfig.siteName}`, default: seoConfig.title },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [
    { name: "Harsh Baljeetsingh Yadav", url: "https://github.com/Harsh-145" },
  ],
  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harsh Yadav — Software development & machine learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
