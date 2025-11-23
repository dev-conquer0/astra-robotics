import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Copy, CreditCard, Landmark, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
async function initiatePayment(plan: string) {
  const response = await fetch('/api/initiate-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  });
  if (!response.ok) throw new Error('Payment initiation failed');
  return response.json();
}
export function PricingTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const handleBuyNow = async (plan: string) => {
    setIsLoading(true);
    setSelectedPlan(plan);
    try {
      const result = await initiatePayment(plan);
      if (result.success) {
        toast.success('Checkout ready!', { description: `Delivery in ${result.data.estimatedDelivery}` });
        setCheckoutOpen(true);
      } else {
        toast.error('Error', { description: result.error || 'Could not initiate checkout.' });
      }
    } catch (error) {
      toast.error('Network Error', { description: 'Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Invest in the Future</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for revolutionary technology.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            plan="Home Model"
            price="$25,000"
            description="One-time purchase for the Home Assistant model."
            features={['Lifetime software updates', '2-year hardware warranty', '24/7 premium support']}
            onBuyNow={() => handleBuyNow('Home Model')}
            isLoading={isLoading && selectedPlan === 'Home Model'}
          />
          <PricingCard
            plan="Industrial Model"
            price="Contact Us"
            description="Custom pricing based on fleet size and requirements."
            features={['On-site deployment & training', 'Custom API integrations', 'Dedicated account manager']}
            onBuyNow={() => handleBuyNow('Industrial Model')}
            isLoading={isLoading && selectedPlan === 'Industrial Model'}
            isEnterprise
          />
        </div>
      </div>
      <Dialog open={isCheckoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Secure Checkout: {selectedPlan}</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="card"><CreditCard className="w-4 h-4 mr-2" />Card</TabsTrigger>
              <TabsTrigger value="flutterwave">Flutterwave</TabsTrigger>
              <TabsTrigger value="bank"><Landmark className="w-4 h-4 mr-2" />Bank</TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="pt-4">
              <p className="text-muted-foreground">Paystack integration coming soon. This is a mock interface.</p>
            </TabsContent>
            <TabsContent value="flutterwave" className="pt-4">
              <p className="text-muted-foreground">Flutterwave integration coming soon. This is a mock interface.</p>
            </TabsContent>
            <TabsContent value="bank" className="pt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Please transfer to the account below. Use your email as reference.</p>
              <div className="flex justify-between items-center p-2 border rounded-md">
                <span>Astra Robotics Inc.</span>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard('Astra Robotics Inc.')}><Copy className="w-4 h-4" /></Button>
              </div>
              <div className="flex justify-between items-center p-2 border rounded-md">
                <span>1234567890 (Wema Bank)</span>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard('1234567890')}><Copy className="w-4 h-4" /></Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </section>
  );
}
function PricingCard({ plan, price, description, features, onBuyNow, isLoading, isEnterprise = false }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className={`h-full flex flex-col rounded-2xl ${isEnterprise ? 'border-sky-500 border-2' : ''}`}>
        <CardHeader>
          <CardTitle className="text-2xl">{plan}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <span className="text-4xl font-bold pt-4">{price}</span>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={onBuyNow} disabled={isLoading} className="w-full bg-sky-500 hover:bg-sky-600">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (isEnterprise ? 'Contact Sales' : 'Buy Now')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}