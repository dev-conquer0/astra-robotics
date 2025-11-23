import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const testimonials = [
  {
    quote: "Astra's industrial bots transformed our production line. We saw a 40% increase in efficiency within the first quarter.",
    name: "Jane Doe",
    title: "COO, Innovate Inc.",
    videoUrl: "https://videos.pexels.com/video-files/852395/852395-hd_1280_720_25fps.mp4",
    posterUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The home assistant is a game-changer. It handles all the tedious chores, giving me more time to spend with my family.",
    name: "John Smith",
    title: "Homeowner",
    videoUrl: "https://videos.pexels.com/video-files/855321/855321-hd_1280_720_30fps.mp4",
    posterUrl: "https://images.pexels.com/photos/4246234/pexels-photo-4246234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Unbelievable ROI. The reduction in workplace accidents and labor costs paid for the investment in just over a year.",
    name: "Samuel Lee",
    title: "Factory Manager, Apex Manufacturing",
    videoUrl: "https://videos.pexels.com/video-files/852403/852403-hd_1280_720_25fps.mp4",
    posterUrl: "https://images.pexels.com/photos/159291/foundry-iron-hot-industry-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
export function VideoTestimonials() {
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
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-2 h-full">
                  <Card className="overflow-hidden h-full flex flex-col rounded-2xl shadow-soft dark:bg-slate-900/50">
                    <div className="aspect-video relative">
                      <video
                        key={testimonial.videoUrl}
                        className="w-full h-full object-cover"
                        poster={testimonial.posterUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={(e) => {
                          console.error("Video failed to load", e);
                          (e.target as HTMLVideoElement).style.display = 'none';
                        }}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-white/80">{testimonial.title}</p>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-50px]" />
          <CarouselNext className="hidden sm:flex right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}