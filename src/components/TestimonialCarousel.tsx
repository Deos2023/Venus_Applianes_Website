
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "We installed the Samsung WindFree AC in our living room and the difference is remarkable. The cooling is even throughout the room with no cold drafts. Our electricity bill has reduced significantly too.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Office Manager",
    content: "We equipped our entire office with LG Dual Inverter ACs and the improvement in comfort has boosted productivity. The quiet operation means no distractions during meetings.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "As an interior designer, I recommend Daikin ACs to my clients for their sleek design and powerful cooling. They blend seamlessly with any interior style and the air purification feature is a bonus.",
    rating: 4,
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers about their experience with our air conditioning solutions
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-1">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-cool-blue p-1">
                          <img
                            src={testimonial.imageSrc}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://via.placeholder.com/150";
                            }}
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? 'text-warm-amber fill-warm-amber' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <blockquote className="italic text-gray-700 mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-cool-blue text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative -left-0 mx-2" />
            <CarouselNext className="relative -right-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
