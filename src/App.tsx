import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import GlobalContactButtons from "./components/GlobalContactButtons";

const HomePage = lazy(() => import("./pages/HomePage"));
const TypeSelectionPage = lazy(() => import("./pages/TypeSelectionPage"));
const BrandSelectionPage = lazy(() => import("./pages/BrandSelectionPage"));
const InverterSelectionPage = lazy(() => import("./pages/InverterSelectionPage"));
const TonnageSelectionPage = lazy(() => import("./pages/TonnagePage"));
const StarSelectionPage = lazy(() => import("./pages/StarSelectionPage"));
const ProductResultsPage = lazy(() => import("./pages/ProductResultsPage"));
const BrandPage = lazy(() => import("./pages/BrandPage"));
const ACDetailsPage = lazy(() => import("./pages/ACDetailsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Simple loading spinner for suspense fallback
const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlobalContactButtons />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select-type" element={<TypeSelectionPage />} />
            <Route path="/select-brand/:type" element={<BrandSelectionPage />} />
            <Route path="/select-inverter/:type/:brand" element={<InverterSelectionPage />} />
            <Route path="/select-tonnage/:type/:brand/:inverter" element={<TonnageSelectionPage />} />
            <Route path="/select-star/:type/:brand/:inverter/:tonnage" element={<StarSelectionPage />} />
            <Route path="/products/:type/:brand/:inverter/:tonnage/:star?" element={<ProductResultsPage />} />
            <Route path="/brand/:brandName" element={<BrandPage />} />
            <Route path="/brand/:brandName/ton/:tonValue/star/:starRating" element={<ACDetailsPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;