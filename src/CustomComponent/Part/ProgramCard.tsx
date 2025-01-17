"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Primary from "../../../SchoolPics/PrimaryClass1.jpg";
import KinderClass from "../../../SchoolPics/KinderClass.jpg";
import SeniorKids from "../../../SchoolPics/SeniorKids3.jpg";
import Plus2Pics6 from "../../../SchoolPics/Plus2Pics4.jpg";

interface Program {
  title: string;
  ageGroup: string;
  description: string;
  imageUrl: string;
  link: string;
}

const programs: Program[] = [
  {
    title: "Montessori",
    ageGroup: "Age 3-5",
    description:
      "Our Montessori program nurtures young minds through hands-on learning experiences, fostering independence and creativity in a supportive environment.",
    imageUrl: KinderClass,
    link: "/programs/montessori",
  },
  {
    title: "Primary School",
    ageGroup: "Grades 1-5",
    description:
      "Building strong foundations through engaging curriculum and personalized attention, preparing students for higher academic challenges.",
    imageUrl: Primary,
    link: "/programs/primary",
  },
  {
    title: "Secondary School",
    ageGroup: "Grades 6-10",
    description:
      "Comprehensive education focusing on academic excellence, character development, and practical skills for future success.",
    imageUrl: SeniorKids,
    link: "/programs/secondary",
  },
  {
    title: "Higher Secondary",
    ageGroup: "Grades 11-12",
    description:
      "Advanced academic programs preparing students for university through specialized streams in Science, Management, and Humanities.",
    imageUrl: Plus2Pics6,
    link: "/programs/higher-secondary",
  },
];

export default function ProgramCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    Array.from(cards).forEach((card) => {
      const content = card.querySelector(".content");
      const overlay = card.querySelector(".overlay");
      const title = card.querySelector(".title");
      const details = card.querySelector(".details");

      // Initial state
      gsap.set(overlay, {
        opacity: 0,
        scale: 0,
        transformOrigin: "bottom left",
      });
      gsap.set(details, { y: 30, opacity: 0 });
      gsap.set(title, { y: 40, opacity: 1 }); // Positioned title above the bottom

      // Create hover timeline
      const tl = gsap.timeline({ paused: true });

      tl.to(overlay, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          title,
          {
            y: -60, // Move title up
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          details,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Add hover events
      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section className="py-12 px-4 md:py-20 md:px-6">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1600px] mx-auto"
      >
        {programs.map((program, index) => (
          <Link
            to={program.link}
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer transform transition-transform duration-500 hover:scale-[1.02] w-full h-full shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Inner Bottom Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

            <div className="overlay absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/75 to-primary/50" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 ">
              <div className="title transform transition-transform duration-500">
                <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                  {program.title}
                </h3>
              </div>

              <div className="details space-y-4 mt-4">
                <div className="space-y-2">
                  <p className="text-white/90 text-lg font-medium tracking-wide">
                    {program.ageGroup}
                  </p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-sm md:text-base font-semibold tracking-wide uppercase">
                    Explore Program
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
