"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    title: "Transportation",
    description:
      "Safe and reliable transportation service covering major routes with GPS-tracked buses and experienced drivers.",
    icon: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
    bgColor: "from-yellow-500/90 to-amber-600/90",
  },
  {
    title: "Computer Labs",
    description:
      "State-of-the-art computer labs equipped with the latest hardware and software for practical learning experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/1786/1786971.png",
    bgColor: "from-blue-500/90 to-blue-600/90",
  },
  {
    title: "Science Labs",
    description:
      "Well-equipped physics, chemistry, and biology labs for hands-on experimental learning.",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046269.png",
    bgColor: "from-green-500/90 to-green-600/90",
  },
  {
    title: "Cafeteria",
    description:
      "Spacious cafeteria serving nutritious meals prepared in hygienic conditions with varied menu options.",
    icon: "https://cdn-icons-png.flaticon.com/512/1830/1830878.png",
    bgColor: "from-orange-500/90 to-orange-600/90",
  },
  {
    title: "Student Hostel",
    description:
      "Comfortable residential facilities with 24/7 supervision, study rooms, and modern amenities.",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    bgColor: "from-purple-500/90 to-purple-600/90",
  },
  {
    title: "Sports Complex",
    description:
      "Professional football ground and basketball court with quality equipment and trained coaches.",
    icon: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
    bgColor: "from-red-500/90 to-red-600/90",
  },
];

export default function Facilities() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) {
      console.error(
        "No cards found in cardsRef. Ensure the ref is attached correctly."
      );
      return;
    }

    Array.from(cards).forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
        },

        y: 50,
        duration: 0.8,
        ease: "power3.out",
        delay: index * 0.2,
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="py-16 px-4 md:py-24 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide state-of-the-art facilities to ensure the best learning
            environment for our students.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="mb-8 flex justify-center">
                  <div className="relative h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300" />
                    <img
                      src={facility.icon}
                      alt={facility.title}
                      className="absolute inset-0 h-full w-full p-5 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {facility.description}
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${facility.bgColor} transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
