import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.css";

const font = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Issue Helper",
  description: "Need help?",
  icons: {
    icon: "utils/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
