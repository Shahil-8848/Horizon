import Footer from "@/CustomComponent/Footer";
import Header from "@/CustomComponent/Header";
import type React from "react";


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      
    </div>
  );
}
