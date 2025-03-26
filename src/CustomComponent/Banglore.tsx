import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PipeBand1 from "../../SchoolPics/PipeBand1.jpg";
import PipeBandGroup2 from "../../SchoolPics/PipeBandGroup2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Bangalore: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const images = [PipeBand1, PipeBandGroup2];

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const imageElements = imageRefs.current.filter(
      (el): el is HTMLImageElement => el !== null
    );

    if (!section || !trigger || imageElements.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    imageElements.forEach((img, i) => {
      if (i === 0) {
        tl.to(img, { opacity: 1, duration: 0.5 });
      } else {
        tl.to(img, { opacity: 1, duration: 0.5 }, "-=0.25").to(
          imageElements[i - 1],
          { opacity: 0, duration: 0.5 },
          "<"
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50">
      <div ref={triggerRef} className="min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Images */}
        <div className="w-full  h-screen sticky top-0">
          <div className="relative h-full overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={img || "/placeholder.svg"}
                alt={`Pipe Band in Bangalore ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === 0 ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Description */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg">
          <div className="p-8 lg:p-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">
              Pipe Band's Journey to Puttaparthi, Bangalore
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our school's esteemed Pipe Band embarked on an unforgettable
                journey to Puttaparthi, Bangalore, showcasing their musical
                prowess and cultural heritage. This trip not only provided an
                opportunity for our talented students to perform but also
                allowed them to experience the rich traditions of Southern
                India.
              </p>
              <p>
                The band's performance in Puttaparthi was a resounding success,
                captivating the audience with their harmonious melodies and
                precise marching formations. The unique blend of Scottish
                bagpipes and Indian surroundings created a truly magical
                atmosphere, bridging cultures through the universal language of
                music.
              </p>
              <p>
                During their stay, the students had the chance to interact with
                local musicians, exchanging knowledge and techniques. This
                cultural exchange broadened their musical horizons and fostered
                a deep appreciation for diverse musical traditions.
              </p>
              <p>
                The trip also included visits to historical sites and landmarks
                in Bangalore, providing an educational dimension to the journey.
                Students learned about the region's rich history, architecture,
                and spiritual significance, making the experience truly
                holistic.
              </p>
              <p>
                This performance tour to Puttaparthi not only showcased our
                school's musical talent but also served as a transformative
                experience for our students. It instilled in them a sense of
                pride, cultural awareness, and the confidence to perform on
                grand stages.
              </p>
              <p>
                The memories created during this journey will undoubtedly last a
                lifetime, inspiring our students to continue their musical
                pursuits with asdfd renewed passion and a global perspective WITH CAMMNESSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bangalore;
