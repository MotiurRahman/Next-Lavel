import Navbar from "@/components/shared/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-screen text-4xl">{children}</div>
    </>
  );
}
