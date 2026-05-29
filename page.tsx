"use client";
import { useState } from "react";
import Navbar from "@/components/user/Navbar";
import Hero from "@/components/user/Hero";
import ProductGrid from "@/components/user/ProductGrid";
import HowItWorks from "@/components/user/HowItWorks";
import ContactForm from "@/components/user/ContactForm";
import Footer from "@/components/user/Footer";
import ScrollToTop from "@/components/user/ScrollToTop";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero onSearch={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
      <HowItWorks />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
