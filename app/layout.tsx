import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <NavBar/>
        <div className="flex-grow">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
