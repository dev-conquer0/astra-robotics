import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { Hero } from '@/components/hero/Hero';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { PricingTable } from '@/components/PricingTable';
import { Footer } from '@/components/Footer';
import { BookDemoModal } from '@/components/forms/BookDemoModal';
import { StorySection } from '@/components/story/StorySection';
import { BenefitsSection } from '@/components/benefits/BenefitsSection';
import { DemoSection } from '@/components/demo/DemoSection';
import { VideoTestimonials } from '@/components/testimonials/VideoTestimonials';
export function HomePage() {
  const [isBookDemoModalOpen, setBookDemoModalOpen] = useState(false);
  const handleBuyNowClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-background text-foreground">
      <ThemeToggle className="fixed top-4 right-4" />
      <main>
        <Hero onBookDemo={() => setBookDemoModalOpen(true)} onBuyNow={handleBuyNowClick} />
        <StorySection />
        <ProductShowcase />
        <BenefitsSection />
        <DemoSection />
        <div id="pricing">
          <PricingTable />
        </div>
        <VideoTestimonials />
      </main>
      <Footer />
      <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setBookDemoModalOpen(false)} />
      <Toaster richColors closeButton />
    </div>
  );
}