import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
export interface Product {
  title: string;
  features: string[];
  videoUrl: string;
  posterUrl: string;
}
interface ProductCardProps {
  product: Product;
  onLearnMore: () => void;
}
export function ProductCard({ product, onLearnMore }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full flex flex-col rounded-2xl shadow-soft dark:bg-slate-900/50">
        <CardHeader>
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <video
              key={product.videoUrl}
              poster={product.posterUrl}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={product.videoUrl} type="video/mp4" />
            </video>
            <img src={product.posterUrl} alt={product.title} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
          </div>
          <CardTitle className="pt-4 text-2xl font-bold">{product.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={onLearnMore} className="w-full bg-sky-500 hover:bg-sky-600">Learn More</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}