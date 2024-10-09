import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Meteor Bank web app",
  description: "Meteor is a banking platform project",
  icons: {
    icon: '/icons/logo-svg.svg'
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSerif.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
