import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "sonner";
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});
type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export function Footer() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });
  const onSubmit = async (data: NewsletterFormValues) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Subscribed!", { description: "Thanks for joining our newsletter." });
        reset();
      } else {
        toast.error("Subscription failed", { description: result.error || "Please try again." });
      }
    } catch (error) {
      toast.error("Network Error", { description: "Could not subscribe. Please try again later." });
    }
  };
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Astra Robotics</h3>
            <p className="mt-2 text-sm">Reinventing Work. Redefining Home.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Github /></a>
              <a href="#" className="hover:text-white"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Newsletter</h4>
            <p className="mt-2 text-sm">Stay updated with our latest innovations.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-800 border-slate-700 text-white"
                {...register("email")}
              />
              <Button type="submit" size="sm" className="bg-sky-500 hover:bg-sky-600" disabled={isSubmitting}>
                {isSubmitting ? '...' : 'Go'}
              </Button>
            </form>
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Astra Robotics. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}