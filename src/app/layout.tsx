import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "High View's Seamless Gutters",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <link rel="icon" href="/favicons/favicon.ico" sizes="any"/>
        <link
            rel="apple-touch-icon"
            href="/favicons/apple-touch-icon.png"
            type="image/<generated>"
            sizes="<generated>"
        />
        <link
            rel="icon"
            href="/favicons/android-chrome-512x512.png"
            type="image/<generated>"
            sizes="<generated>"
        />
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
