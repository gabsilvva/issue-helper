import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@styles/globals.css";
import Nav from "@/components/nav/Nav";

const font = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Issue Helper",
    default: "Issue Helper",
  },
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
        <div className="h-screen bg-black flex">
          <Nav />
          <main className="flex-2 pt-3 h-full">
            <div className="h-full overflow-y-auto bg-white rounded-tl-md rounded-bl-md p-pd max-sm:p-pm">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
