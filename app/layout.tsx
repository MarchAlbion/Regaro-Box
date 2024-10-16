import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTail from "./{components}/Header/HeaderTail";
import Container from "./{components}/MainContainer/page";
import { Children } from "react";
import { LayoutComponent } from "./{components}/LayoutComponent/LayoutComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regaro Builds",
  description: "Generated by create next app",
  icons: {
    icon: "Regaro.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutComponent children={children} />
      </body>
    </html>
  );
}
