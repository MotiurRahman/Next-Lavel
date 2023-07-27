import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App Router",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="min-h-screen text-4xl">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
