import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PETERS ADONU",
  description: "Dr. Peters Ikechukwu Adonu - A Multifaceted Leader and Visionary",
  icons: {
    icon: "/assets/piaaaa white copy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        {/* Bootstrap removed - using custom components/styling */}
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        {/* Bootstrap JS removed */}
      </body>
    </html>
  );
}
