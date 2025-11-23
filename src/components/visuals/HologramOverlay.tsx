import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface HologramOverlayProps {
  className?: string;
}
export function HologramOverlay({ className }: HologramOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Example holographic elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-500/20 rounded-lg animate-float animation-delay-500" />
      <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
    </motion.div>
  );
}