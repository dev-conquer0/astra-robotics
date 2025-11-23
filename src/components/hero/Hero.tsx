import { motion } from 'framer-motion';
import { ArrowDown, PlayCircle, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HologramOverlay } from '@/components/visuals/HologramOverlay';
interface HeroProps {
  onBookDemo: () => void;
  onBuyNow: () => void;
}
export function Hero({ onBookDemo, onBuyNow }: HeroProps) {
  const videoUrl = "https://videos.pexels.com/video-files/8329931/8329931-hd_1920_1080_25fps.mp4";
  const posterUrl = "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <video
        poster={posterUrl}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <HologramOverlay />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight"
        >
          Reinventing Work. Redefining Home.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/80 text-pretty"
        >
          High-grade humanoids engineered for home assistance and industrial automation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={onBuyNow}
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={onBookDemo}
          >
            <PlayCircle className="mr-2 h-5 w-5" /> Book a Live Demo
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}