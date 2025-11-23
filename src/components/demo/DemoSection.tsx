import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import { DemoModal } from '@/components/DemoModal';
export function DemoSection() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  return (
    <>
      <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              console.error("Background video failed to load", e);
              (e.target as HTMLVideoElement).style.display = 'none';
            }}
          >
            <source src="https://videos.pexels.com/video-files/4782135/4782135-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display">See the Future in Motion</h2>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Watch our cinematic demo to witness how Astra humanoids perform complex tasks with grace and precision in real-world scenarios.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            onClick={() => setDemoModalOpen(true)}
          >
            <PlayCircle className="mr-2 h-6 w-6" />
            Watch Full Demo
          </Button>
        </motion.div>
      </section>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}