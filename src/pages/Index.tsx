import { HeroSection } from "@/components/HeroSection";
import { ProductDetails } from "@/components/ProductDetails";
import { PrivacyBenefits } from "@/components/PrivacyBenefits";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { CompanyLeadership } from "@/components/CompanyLeadership";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductDetails />
      <PrivacyBenefits />
      <Testimonials />
      <BookingForm />
      <CompanyLeadership />
      <Footer />
    </div>
  );
};

export default Index;
