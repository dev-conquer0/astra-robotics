import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
const bookDemoSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  preferredTime: z.string().min(5, { message: 'Please suggest a time.' }),
});
type BookDemoFormValues = z.infer<typeof bookDemoSchema>;
interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookDemoFormValues>({
    resolver: zodResolver(bookDemoSchema),
  });
  const onSubmit = async (data: BookDemoFormValues) => {
    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success('Demo Booked!', {
          description: "We'll be in touch shortly to confirm.",
        });
        reset();
        onClose();
      } else {
        toast.error('Booking Failed', {
          description: result.error || 'An unexpected error occurred.',
        });
      }
    } catch (error) {
      toast.error('Network Error', {
        description: 'Could not connect to the server. Please try again later.',
      });
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Live Demo</DialogTitle>
          <DialogDescription>
            See Astra robots in action. Fill out the form below, and we'll schedule a personalized demo for you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div className="col-span-3">
              <Input id="name" {...register('name')} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <div className="col-span-3">
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="preferredTime" className="text-right">
              Preferred Time
            </Label>
            <div className="col-span-3">
              <Input id="preferredTime" placeholder="e.g., Tomorrow at 2 PM EST" {...register('preferredTime')} />
              {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime.message}</p>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600">
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Schedule Demo'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}