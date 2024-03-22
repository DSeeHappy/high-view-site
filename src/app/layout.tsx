import type {Metadata} from "next";
import {Inter, Oswald} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React from "react";
import ServiceArea from "@/app/components/serviceArea";
import TopPromoBar from "@/app/components/topPromoBar";

const inter = Oswald({subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal"]});

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
        <TopPromoBar/>
        <Navbar/>
        <div className="z-20 md:pl-8 md:pr-8 lg:pl-10 lg:pr-10 bg-brand-blue">
            <div className="ring-8 ring-brand-blue rounded-3xl">
                {children}
            </div>
        </div>
        <ServiceArea/>
        <Footer/>
        </body>
        </html>
    );
}
