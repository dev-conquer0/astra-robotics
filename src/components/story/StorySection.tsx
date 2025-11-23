import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HologramOverlay } from '@/components/visuals/HologramOverlay';
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
export function StorySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-semibold">Our Vision for a Better Future</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Astra, we believe in the power of robotics to augment human potential. Our mission is to create intelligent, reliable, and accessible humanoid robots that seamlessly integrate into our daily lives, freeing us to focus on what truly matters: creativity, connection, and progress.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="relative aspect-video rounded-2xl overflow-hidden shadow-soft">
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
            <HologramOverlay className="opacity-30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}