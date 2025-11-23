import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const testimonials = [
  {
    quote: "Astra's industrial bots transformed our production line. We saw a 40% increase in efficiency within the first quarter.",
    name: "Jane Doe",
    title: "COO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The home assistant is a game-changer. It handles all the tedious chores, giving me more time to spend with my family.",
    name: "John Smith",
    title: "Homeowner",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Unbelievable ROI. The reduction in workplace accidents and labor costs paid for the investment in just over a year.",
    name: "Samuel Lee",
    title: "Factory Manager, Apex Manufacturing",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];
export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Trusted by Industry Leaders & Families</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about the Astra revolution.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center justify-center p-6">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      <p className="font-semibold mt-4">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}