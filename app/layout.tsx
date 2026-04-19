import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wings — Fly to Your Goals",
  description:
    "Wings connects personal trainers and clients in one premium platform. No more WhatsApp chaos — just clean, structured coaching.",
  keywords: [
    "personal trainer app",
    "fitness coaching",
    "trainer client platform",
    "workout tracking",
    "wings fitness app",
  ],
  authors: [{ name: "Wings" }],
  creator: "Wings",
  publisher: "Wings",
  metadataBase: new URL("https://wingsapp.fit"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wingsapp.fit",
    title: "Wings — Fly to Your Goals",
    description:
      "The premium platform connecting personal trainers and their clients. Workouts, chat, progress — all in one place.",
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings — Fitness Coaching Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wings — Fly to Your Goals",
    description:
      "The premium platform connecting personal trainers and their clients.",
    images: ["/og-image.png"],
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

export const viewport: Viewport = {
  themeColor: "#060B18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        {/*
          Analytics placeholders — uncomment and add your IDs before going live:

          Meta Pixel:
          <script dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}} />

          Google Tag Manager:
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        */}
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
