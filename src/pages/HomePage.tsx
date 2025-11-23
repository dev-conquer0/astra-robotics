import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { Hero } from '@/components/hero/Hero';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { DemoModal } from '@/components/DemoModal';
import { PricingTable } from '@/components/PricingTable';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { Check, Cpu, ShieldCheck } from 'lucide-react';
function StoryVisionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Our Vision for a Better Future</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Astra, we believe in the power of robotics to augment human potential. Our mission is to create intelligent, reliable, and accessible humanoid robots that seamlessly integrate into our daily lives, freeing us to focus on what truly matters: creativity, connection, and progress.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-soft">
            <video
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/7391006/pexels-photo-7391006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://videos.pexels.com/video-files/7578549/7578549-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
function KeyBenefitsSection() {
  const benefits = [
    { icon: Cpu, title: 'Workflow Automation', description: 'Automate repetitive tasks with unparalleled precision.' },
    { icon: Check, title: 'Cost Efficiency', description: 'Reduce operational costs and increase your bottom line.' },
    { icon: ShieldCheck, title: 'Enhanced Safety', description: 'Eliminate human error in hazardous environments.' },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Core Advantages of Astra</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 border rounded-2xl shadow-sm dark:border-slate-800">
              <div className="flex justify-center items-center mb-4">
                <div className="p-4 bg-sky-100 dark:bg-sky-900/50 rounded-full">
                  <benefit.icon className="h-8 w-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HomePage() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);
  const handleBuyNowClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-background text-foreground">
      <ThemeToggle className="fixed top-4 right-4" />
      <main>
        <Hero onBookDemo={() => setDemoModalOpen(true)} onBuyNow={handleBuyNowClick} />
        <StoryVisionSection />
        <ProductShowcase />
        <KeyBenefitsSection />
        <div id="pricing">
          <PricingTable />
        </div>
        <Testimonials />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <Toaster richColors closeButton />
    </div>
  );
}