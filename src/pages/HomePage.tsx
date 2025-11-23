import { useState, useEffect } from 'react';
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
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  const handleBuyNowClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-background text-foreground">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <main>
        <Hero onBookDemo={() => setBookDemoModalOpen(true)} onBuyNow={handleBuyNowClick} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12">
            <StorySection />
          </div>
        </div>
        <ProductShowcase />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12">
            <BenefitsSection />
          </div>
        </div>
        <DemoSection />
        <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12">
            <PricingTable />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-10 lg:py-12">
            <VideoTestimonials />
          </div>
        </div>
      </main>
      <Footer />
      <BookDemoModal isOpen={isBookDemoModalOpen} onClose={() => setBookDemoModalOpen(false)} />
      <Toaster richColors closeButton />
    </div>
  );
}