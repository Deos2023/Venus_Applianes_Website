
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "We installed the Samsung WindFree AC in our living room and the difference is remarkable. The cooling is even throughout the room with no cold drafts. Our electricity bill has reduced significantly too.",
    rating: 5,
    imageSrc: "/lovable-uploads/samsung/split-ac/1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Office Manager",
    content: "We equipped our entire office with LG Dual Inverter ACs and the improvement in comfort has boosted productivity. The quiet operation means no distractions during meetings.",
    rating: 5,
    imageSrc: "/lovable-uploads/lg/US-Q18KWXE/1.avif"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "As an interior designer, I recommend Daikin ACs to my clients for their sleek design and powerful cooling. They blend seamlessly with any interior style and the air purification feature is a bonus.",
    rating: 4,
    imageSrc: "/lovable-uploads/daikin/split-ac/1.png"
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it – hear from our satisfied customers about their experience with our premium air conditioning solutions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-2">
                    <Card className="border-none shadow-2xl bg-white">
                      <CardContent className="p-8 lg:p-12">
                        <div className="flex flex-col items-center text-center">
                          <motion.div 
                            className="w-32 h-32 rounded-2xl overflow-hidden mb-8 shadow-xl"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <img
                              src={testimonial.imageSrc}
                              alt={`${testimonial.name}'s AC`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/lovable-uploads/samsung/split-ac/1.png";
                              }}
                            />
                          </motion.div>
                          <motion.div 
                            className="flex mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-6 w-6 ${
                                  i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </motion.div>
                          <motion.blockquote 
                            className="italic text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            "{testimonial.content}"
                          </motion.blockquote>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <p className="font-bold text-xl text-gray-900">{testimonial.name}</p>
                            <p className="text-blue-600 font-medium">{testimonial.role}</p>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 mx-3 bg-white shadow-xl hover:bg-blue-50 border-2 border-blue-100" />
              <CarouselNext className="relative -right-0 mx-3 bg-white shadow-xl hover:bg-blue-50 border-2 border-blue-100" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
