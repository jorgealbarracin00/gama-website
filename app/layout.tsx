import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandSans = Sora({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Gama Dynamics",
  description:
    "Gama Dynamics app laboratory, incubation chamber, and deployed project index.",

  icons: {
    icon: [
      {
        url: "/11-gama-favicon-32.webp",
        type: "image/webp",
        sizes: "32x32",
      },
    ],
    shortcut: [
      {
        url: "/11-gama-favicon-32.webp",
        type: "image/webp",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/13-gama-apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} ${brandSans.variable} antialiased`}
      >
        {children}
        <footer
          id="contact"
          className="border-t border-white/15 bg-slate-950 px-6 py-6 text-center text-sm text-slate-200"
        >
          <a
            href="mailto:support@gamadynamics.com.au"
            className="underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
          >
            GAMA Dynamics Support · support@gamadynamics.com.au
          </a>
        </footer>
      </body>
    </html>
  );
}
