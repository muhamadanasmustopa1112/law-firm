import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { headers } from "next/headers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateMetadata(): Metadata {
  let host = headers().get("host");
  if (host?.includes("localhost")) {
    host = "http://" + host;
  } else {
    host = "https://" + host;
  }
  return {
    metadataBase: new URL(host!),
    authors: [
      {
        name: "IURIS International Indonesia",
        url: host!,
      },
    ],
    title: {
      default: "Law Firm | IURIS",
      template: "%s - Law Firm | IURIS",
    },
    description:
      "Platform that uses human and AI consultants to help you with any consultation task quickly.",
    manifest: "/site.webmanifest",
    icons: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      title: "IURIS International Indonesia | Consulting Firm",
      description:
        "Platform that uses human and AI consultants to help you with any consultation task quickly.",
      locale: "en",
      images: [
        {
          url: "/android-chrome-192x192.png",
          width: 192,
          height: 192,
          alt: "IURIS International Indonesia | Consulting Firm",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
