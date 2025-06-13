
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// AC Installation Gallery images 
const acGalleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/samsung/split-ac/1.png",
    alt: "Samsung Split AC Installation - Living Room",
    caption: "Samsung 1.5 Ton Inverter Split AC - Modern Living Room Installation"
  },
  {
    id: 2,
    src: "/lovable-uploads/lg/US-Q18KWXE/1.avif",
    alt: "LG Dual Inverter AC - Bedroom Setup",
    caption: "LG Dual Inverter AC - Energy Efficient Bedroom Cooling"
  },
  {
    id: 3,
    src: "/lovable-uploads/daikin/split-ac/1.png",
    alt: "Daikin AC Installation - Office Space",
    caption: "Daikin Premium AC - Commercial Office Installation"
  },
  {
    id: 4,
    src: "/lovable-uploads/voltas/window-ac/1.png",
    alt: "Voltas Window AC Installation",
    caption: "Voltas Window AC - Compact Room Cooling Solution"
  },
  {
    id: 5,
    src: "/lovable-uploads/mitsubishi/split-ac/1.png",
    alt: "Mitsubishi Heavy Industries AC",
    caption: "Mitsubishi Premium AC - Advanced Cooling Technology"
  },
  {
    id: 6,
    src: "/lovable-uploads/carrier/split-ac/1.png",
    alt: "Carrier Flexicool AC Installation",
    caption: "Carrier Flexicool - Smart Home Integration"
  },
  {
    id: 7,
    src: "/lovable-uploads/hitachi/split-ac/1.png",
    alt: "Hitachi Inverter AC - Master Bedroom",
    caption: "Hitachi Inverter AC - Quiet Operation for Bedrooms"
  },
  {
    id: 8,
    src: "/lovable-uploads/bluestar/split-ac/1.png",
    alt: "Blue Star AC - Luxury Installation",
    caption: "Blue Star Premium AC - Luxury Home Cooling"
  },
  {
    id: 9,
    src: "/lovable-uploads/godrej/GODREJ 1.5T INV 5/1.jpg",
    alt: "Godrej Green Inverter AC",
    caption: "Godrej Green Technology - Eco-Friendly Cooling"
  },
  {
    id: 10,
    src: "/lovable-uploads/lloyd/GLS18I5FOGEW/1.jpg",
    alt: "Lloyd AC Installation - Open Space",
    caption: "Lloyd AC - Perfect for Open Living Spaces"
  },
  {
    id: 11,
    src: "/lovable-uploads/hisense/AS-12TF4R3AJ/1.jpg",
    alt: "Hisense AC - Modern Design",
    caption: "Hisense AC - Sleek Design with Advanced Features"
  },
  {
    id: 12,
    src: "/lovable-uploads/carrier/XCEL_EDGE_FXI/1.jpg",
    alt: "Carrier XCEL Edge AC Installation",
    caption: "Carrier XCEL Edge - Premium Cooling Experience"
  }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="mb-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              AC Installation Gallery
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Explore our premium air conditioner installations across residential and commercial spaces. 
              See how we transform spaces with efficient cooling solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {acGalleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                    <p className="text-white text-sm lg:text-base font-medium leading-relaxed">
                      {image.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details
                </div>
              </div>
            ))}
          </div>
          
          <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
            <DialogContent className="max-w-4xl bg-black/95 border-gray-800">
              {selectedImage !== null && (
                <div className="flex flex-col items-center p-4">
                  <img 
                    src={acGalleryImages[selectedImage].src}
                    alt={acGalleryImages[selectedImage].alt}
                    className="max-h-[70vh] w-auto object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="mt-6 text-center">
                    <p className="text-white text-lg font-medium mb-2">
                      {acGalleryImages[selectedImage].caption}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Professional installation by CoolBreeze AC experts
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
