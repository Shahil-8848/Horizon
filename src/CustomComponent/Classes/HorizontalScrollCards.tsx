import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import Award from "../../../SchoolPics/Awards1.jpg";
import PipeBand from "../../../SchoolPics/PipeBand4.jpg";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Fostering a culture of academic excellence and innovation",
    image: Award,
  },
  {
    id: 2,
    title: "Sports Programs",
    description: "Comprehensive sports programs for all-round development",
    image: PipeBand,
  },
  {
    id: 3,
    title: "Arts & Culture",
    description: "Rich cultural programs and artistic expressions",
    image: Award,
  },
  {
    id: 4,
    title: "Technology",
    description: "State-of-the-art technology integration in learning",
    image: PipeBand,
  },
  {
    id: 5,
    title: "Global Perspective",
    description: "International exposure and global learning opportunities",
    image: Award,
  },
];

const HorizontalScrollCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".scroll-card");

      // Set initial state
      gsap.set(cards, { xPercent: (i) => i * 100 });

      // Create horizontal scroll animation
      gsap.to(cards, {
        xPercent: (i) => -100 * (cards.length - 1),
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${window.innerWidth * 1.2}`, // Adjusted to make it less wide
          scrub: 1,
          pin: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-6">
      <div ref={triggerRef} className="h-[70vh]">
        {" "}
        {/* Reduced height */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Our Programs
          </h2>

          <div className="relative h-[75vh] overflow-hidden">
            {" "}
            {/* Increased card container height */}
            <div className="absolute flex gap-4">
              {" "}
              {/* Reduced gap */}
              {cards.map((card) => (
                <Card
                  key={card.id}
                  className="scroll-card w-[500px] shrink-0 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <CardContent className="p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[300px] object-cover rounded-lg mb-4" // Increased image height
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;
