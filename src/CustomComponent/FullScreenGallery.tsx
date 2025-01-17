import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import kinderPic from "../../SchoolPics/kinderPic.jpg";
import krishna from "../../SchoolPics/Krishna2.jpg";
import kinderPic3 from "../../SchoolPics/kinderPic3.jpg";
import kinderPic4 from "../../SchoolPics/kinderPic4.jpg";
import PipeBand2 from "../../SchoolPics/PipeBand2.jpg";
import Personal4 from "../../SchoolPics/Personal4.jpg";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface GalleryImage {
  url: string;
  description: string;
  title: string;
}

const FullScreenGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const images: GalleryImage[] = [
    {
      url: krishna,
      title: "Krishna Janamastami",
      description:
        "Celebrating the birth of Lord Krishna with joy and devotion.",
    },
    {
      url: kinderPic,
      title: "Environment Day",
      description:
        "Nurturing young minds to care for our planet and its future.",
    },
    {
      url: kinderPic3,
      title: "School Program",
      description:
        "Showcasing talents and fostering confidence in our students.",
    },
    // {
    //   url: kinderPic4,
    //   title: "Raksha Bandhan",
    //   description:
    //     "Honoring the bond between brothers and sisters in our school community.",
    // },
    {
      url: PipeBand2,
      title: "Pipe Band",
      description: "Matrching with honor and pride.",
    },
    {
      url: Personal4,
      title: "Award Ceremony",
      description: "Receiving the Honourable Award",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,

          duration: 1,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    const interval = setInterval(nextImage, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (descriptionRef.current && titleRef.current && imageRef.current) {
      // Animate description
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate image zoom
      gsap.fromTo(
        `.image-${currentIndex}`,
        { scale: 1 },
        { scale: 1.05, duration: 7, ease: "none" }
      );
    }
  }, [currentIndex]);

  return (
    <section
      ref={galleryRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img
            ref={imageRef}
            src={image.url}
            alt={`Gallery image ${index + 1}`}
            className={`h-full w-full object-cover image-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-16 left-16 max-w-lg">
            <h2 ref={titleRef} className="text-white text-4xl font-bold mb-4">
              {image.title}
            </h2>
            <p ref={descriptionRef} className="text-white text-xl">
              {image.description}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20"
        onClick={prevImage}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default FullScreenGallery;
