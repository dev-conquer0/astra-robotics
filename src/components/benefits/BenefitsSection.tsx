import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, ShieldCheck, Clock, DollarSign, Repeat } from 'lucide-react';
import { HologramOverlay } from '@/components/visuals/HologramOverlay';
const benefits = [
  { icon: Cpu, title: 'Workflow Automation', description: 'Automate repetitive tasks with unparalleled precision.' },
  { icon: DollarSign, title: 'Cost Efficiency', description: 'Reduce operational costs and increase your bottom line.' },
  { icon: ShieldCheck, title: 'Enhanced Safety', description: 'Eliminate human error in hazardous environments.' },
  { icon: Zap, title: 'Productivity Boost', description: 'Increase output and efficiency around the clock.' },
  { icon: Clock, title: '24/7 Operations', description: 'Our robots work tirelessly without breaks or downtime.' },
  { icon: Repeat, title: 'Consistent Quality', description: 'Achieve perfect results every single time.' },
];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: ['easeOut'] } },
};
export function BenefitsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Core Advantages of Astra</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the tangible benefits of integrating humanoid robotics into your workflow.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center p-8 border rounded-2xl shadow-sm dark:border-slate-800 bg-card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-sky-500/50 hover:-translate-y-1"
            >
              <HologramOverlay className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-4 bg-sky-100 dark:bg-sky-900/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-sky-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}