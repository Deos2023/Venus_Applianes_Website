import React, { useState, useEffect, useRef, ReactNode, Suspense } from "react";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: string | number;
  rootMargin?: string;
  fallback?: ReactNode;
  className?: string;
  id?: string;
}

/**
 * LazySection: High-performance intersection-observer based wrapper for below-the-fold content.
 * Prevents premature JavaScript execution, DOM bloat, and subresource loading until user scrolls near.
 * Zero layout shifts (CLS) guaranteed via minHeight and skeleton fallback.
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  minHeight = "280px",
  rootMargin = "250px 0px",
  fallback,
  className = "",
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported (older environments), render immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  const defaultFallback = (
    <div
      className="w-full flex items-center justify-center p-8"
      style={{ minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight }}
      aria-hidden="true"
    >
      <div className="w-full max-w-7xl mx-auto h-32 rounded-2xl bg-slate-100/80 animate-pulse border border-slate-200/50" />
    </div>
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={`w-full ${className}`}
      style={{
        minHeight: !isVisible ? (typeof minHeight === "number" ? `${minHeight}px` : minHeight) : undefined,
      }}
    >
      {isVisible ? (
        <Suspense fallback={fallback || defaultFallback}>{children}</Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

export default LazySection;
