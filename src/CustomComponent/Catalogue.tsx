"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Event1 from "../../SchoolPics/Event1.jpg";
import Farm from "../../SchoolPics/Farm.jpg";
import Event4 from "../../SchoolPics/Event4.jpg";
import Art3 from "../../SchoolPics/art3.jpg";
import Kids1 from "../../SchoolPics/Kids1.jpg";
import NCC1 from "../../SchoolPics/NCC1.jpg";
import Art1 from "../../SchoolPics/Art1.jpg";
import SeniorKids1 from "../../SchoolPics/SeniorKids1.jpg";
import Krishna from "../../SchoolPics/Krishna1.jpg";
import Greet4 from "../../SchoolPics/Greet4.jpg";
import kinderPic5 from "../../SchoolPics/kinderPic5.jpg";
import ComputerLab from "../../SchoolPics/ComputerLab.jpg";
gsap.registerPlugin(ScrollTrigger);

interface CatalogueItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  size: "large" | "medium" | "small";
  category: string;
}

const catalogueItems: CatalogueItem[] = [
  {
    id: 1,
    title: "Krishna Janmastami",
    description: "Celebrating Krishna Birth Day",
    imageUrl: Krishna,
    size: "large",
    category: "Facilities",
  },
  {
    id: 2,
    title: "Kid Performace",
    description:
      "Engaging outdoor activities that promote experiential learning",
    imageUrl: Kids1,
    size: "medium",
    category: "Activities",
  },
  {
    id: 3,
    title: "Modern Classrooms",
    description: "Well-equipped classrooms with latest educational technology",
    imageUrl: SeniorKids1,
    size: "medium",
    category: "Facilities",
  },
  {
    id: 4,
    title: "Collaborative Learning",
    description: "Students working together to solve complex problems",
    imageUrl: NCC1,
    size: "large",
    category: "Learning",
  },
  {
    id: 5,
    title: "Science Lab",
    description: "Advanced laboratory facilities for practical learning",
    imageUrl: Art1,
    size: "medium",
    category: "Facilities",
  },
  {
    id: 6,
    title: "Sports Complex",
    description: "Modern sports facilities for physical development",
    imageUrl: Greet4,
    size: "small",
    category: "Facilities",
  },
  {
    id: 7,
    title: "Library",
    description: "Extensive collection of books and digital resources",
    imageUrl: Art3,
    size: "medium",
    category: "Facilities",
  },
  {
    id: 8,
    title: "Art Studio",
    description: "Creative space for artistic expression",
    imageUrl: kinderPic5,
    size: "small",
    category: "Activities",
  },
  {
    id: 9,
    title: "Art Studio",
    description: "Creative space for artistic expression",
    imageUrl: ComputerLab,
    size: "medium",
    category: "Activities",
  },
  {
    id: 10,
    title: "Art Studio",
    description: "Creative space for artistic expression",
    imageUrl: Farm,
    size: "small",
    category: "Activities",
  },
];

export default function Catalogue() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current;

    // Initial setup - hide all cards
    gsap.set(cards, { opacity: 0, y: 50 });

    // Create scroll triggers for each card
    cards.forEach((card, index) => {
      const direction = index % 2 === 0 ? -50 : 50; // Alternate left/right animations

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: direction,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="relative py-20 px-3 bg-gradient-to-r from-blue-200  via-yellow-200 to-red-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-orange-400 text-center mb-16 italic text-white font-serif">
            We are more than a School
          </h2>

          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {catalogueItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => el && (cardsRef.current[index] = el)}
                className={`group relative overflow-hidden rounded-xl transform transition-transform duration-500 hover:scale-[1.02] cursor-pointer
                ${
                  item.size === "large"
                    ? "md:col-span-2 aspect-[16/9]"
                    : item.size === "medium"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 w-full h-full bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

                <div className="absolute inset-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/80 rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg max-w-prose opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
