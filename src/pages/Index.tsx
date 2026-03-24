import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
const HeroSection = lazy(() => import("@/components/HeroSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const CTASection = lazy(() => import("@/components/CTASection"));
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <Suspense fallback={<div className="min-h-screen" /> }>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </Suspense>
  </>
);

export default Index;
