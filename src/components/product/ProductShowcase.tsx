import { Product, ProductCard } from './ProductCard';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';
const homeAssistant: Product = {
  title: 'Astra Home Assistant',
  features: [
    'Automates daily chores like cleaning and organizing.',
    'Provides companionship and elderly care assistance.',
    '24/7 uptime with autonomous charging.',
    'Advanced safety features for peace of mind.',
  ],
  videoUrl: 'https://videos.pexels.com/video-files/8570959/8570959-hd_1920_1080_25fps.mp4',
  posterUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
const industrialAutomator: Product = {
  title: 'Astra Industrial Automator',
  features: [
    'Boosts productivity on assembly lines by up to 300%.',
    'Reduces labor costs and operational expenditure.',
    'Zero injury risk in hazardous environments.',
    'Achieve positive ROI within 12-18 months.',
  ],
  videoUrl: 'https://videos.pexels.com/video-files/5669533/5669533-hd_1920_1080_25fps.mp4',
  posterUrl: 'https://images.pexels.com/photos/7674643/pexels-photo-7674643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
const comparisonData = [
  { name: 'Speed', 'Astra Bot': 8, 'Competitor A': 5 },
  { name: 'Efficiency', 'Astra Bot': 9.5, 'Competitor A': 6 },
  { name: 'Safety', 'Astra Bot': 10, 'Competitor A': 7 },
  { name: 'Battery Life (hrs)', 'Astra Bot': 18, 'Competitor A': 10 },
];
function ProductDetailsSheet({ product }: { product: Product }) {
  return (
    <SheetContent className="w-[400px] sm:w-[540px]">
      <SheetHeader>
        <SheetTitle className="text-2xl">{product.title} - Specifications</SheetTitle>
      </SheetHeader>
      <div className="py-8">
        <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Astra Bot" fill="#0ea5e9" />
              <Bar dataKey="Competitor A" fill="#64748b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <Button className="w-full mt-8 bg-sky-500 hover:bg-sky-600">Request a Quote</Button>
      </div>
    </SheetContent>
  );
}
export function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Engineered for Every Environment</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether at home or in the factory, Astra humanoids are built to perform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <ProductCard product={homeAssistant} onLearnMore={() => {}} />
              </div>
            </SheetTrigger>
            <ProductDetailsSheet product={homeAssistant} />
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <ProductCard product={industrialAutomator} onLearnMore={() => {}} />
              </div>
            </SheetTrigger>
            <ProductDetailsSheet product={industrialAutomator} />
          </Sheet>
        </div>
      </div>
    </section>
  );
}