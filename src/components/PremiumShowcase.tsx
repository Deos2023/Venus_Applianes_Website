import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ChevronRight } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Superior Cooling Technology",
    description: "Experience the perfect temperature in any weather condition with our advanced cooling systems.",
    imageSrc: "/lovable-uploads/Daikin/FTL35UV16/4.webp",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 2,
    title: "Elegant Design",
    description: "Premium aesthetics that complement your interior decor while providing exceptional functionality.",
    imageSrc: "/lovable-uploads/lg/US-Q18KWXE/4.avif",
    bgColor: "from-purple-500/10 to-blue-500/10"
  },
  {
    id: 3,
    title: "Energy Efficient",
    description: "Reduce your electricity bills with our energy-efficient air conditioning solutions.",
    imageSrc: "/lovable-uploads/mitsubishi/mitsubishi_elec/AGZ18VF/3.png",
    bgColor: "from-green-500/10 to-emerald-500/10"
  }
];

const features = [
  { icon: "⚡", title: "Energy Saving", description: "Up to 60% energy savings with inverter technology" },
  { icon: "🌡️", title: "Rapid Cooling", description: "Powerful cooling performance for instant comfort" },
  { icon: "🛡️", title: "Air Purification", description: "Multi-stage filtration for cleaner, healthier air" },
  { icon: "🔊", title: "Ultra Quiet", description: "Whisper quiet operation as low as 19dB" }
];

const PremiumShowcase = () => {
  return (
    <section
      className="section-padding relative text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for darkening and premium effect */}
      <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold drop-shadow-lg mb-4">
            Premium Air Conditioning Solutions
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto font-medium drop-shadow leading-relaxed">
            Discover a new level of comfort with our innovative and stylish air conditioners designed for modern living
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto mb-16">
          <CarouselContent>
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-2">
                  <Card className="overflow-hidden border-none shadow-2xl bg-white/10 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className={`flex flex-col lg:flex-row h-full bg-gradient-to-br ${item.bgColor} rounded-2xl overflow-hidden min-h-[400px]`}>
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">{item.title}</h3>
                          <p className="text-gray-300 dark:text-gray-200 mb-8 text-lg leading-relaxed">{item.description}</p>
                          
                          <div className="flex items-center text-blue-300 font-medium cursor-pointer group hover:text-blue-700 transition-colors">
                            <span className="text-lg">Learn more</span>
                            <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                        <div className="lg:w-1/2 h-64 lg:h-auto relative bg-white/50 flex items-center justify-center p-8">
                          <img 
                            src={item.imageSrc}
                            alt={item.title}
                            className="max-h-80 w-auto object-contain drop-shadow-xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/lovable-uploads/lg/US-Q18KWXE/1.avif";
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
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative -left-0 mx-3 bg-white/20 hover:bg-white/40 border-none text-white shadow-lg" />
            <CarouselNext className="relative -right-0 mx-3 bg-white/20 hover:bg-white/40 border-none text-white shadow-lg" />
          </div>
        </Carousel>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group hover:scale-105">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;
