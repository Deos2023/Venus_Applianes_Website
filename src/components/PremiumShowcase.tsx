
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const showcaseItems = [
  {
    id: 1,
    title: "Superior Cooling Technology",
    description: "Experience the perfect temperature in any weather condition with our advanced cooling systems.",
    imageSrc: "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Premium aesthetics that complement your interior decor while providing exceptional functionality.",
    imageSrc: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "from-purple-500/10 to-blue-500/10"
  },
  {
    id: 3,
    title: "Energy Efficient",
    description: "Reduce your electricity bills with our energy-efficient air conditioning solutions.",
    imageSrc: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bgColor: "from-green-500/10 to-emerald-500/10"
  }
];

const PremiumShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Premium Air Conditioning Solutions
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover a new level of comfort with our innovative and stylish air conditioners
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className={`flex flex-col md:flex-row h-full bg-gradient-to-br ${item.bgColor}`}>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-600 mb-6">{item.description}</p>
                        </div>
                        <div className="md:w-1/2 h-60 md:h-auto relative">
                          <img 
                            src={item.imageSrc}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                            }}
                          />
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

export default PremiumShowcase;
