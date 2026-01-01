import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/ui/toast";
import { ScrollProgress } from "@/components/scroll-progress";
import { Analytics } from "@/components/analytics";
import { generateStructuredData } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mujeeb Ur Rehman - Computer Science Student & Software Developer",
  description: "Computer Science student at Sukkur IBA University specializing in software development, AI, and web technologies. Explore my projects in Java, Python, and modern web development.",
  keywords: ["Mujeeb Ur Rehman", "Computer Science", "Software Developer", "Sukkur IBA", "Java", "Python", "AI", "Web Development", "Pakistan"],
  authors: [{ name: "Mujeeb Ur Rehman" }],
  creator: "Mujeeb Ur Rehman",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mujeeb-portfolio.vercel.app",
    title: "Mujeeb Ur Rehman - Computer Science Student & Software Developer",
    description: "Computer Science student at Sukkur IBA University specializing in software development, AI, and web technologies.",
    siteName: "Mujeeb Ur Rehman Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mujeeb Ur Rehman - Computer Science Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mujeeb Ur Rehman - Computer Science Student & Software Developer",
    description: "Computer Science student at Sukkur IBA University specializing in software development, AI, and web technologies.",
    images: ["/og-image.jpg"],
    creator: "@mujeeb-ali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <ScrollProgress />
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
