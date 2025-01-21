"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingingGroupPhoto from "../../SchoolPics/Singing.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function SingingShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const textContainer = section.querySelector(".text-container");
    const banner = section.querySelector(".banner");
    const description = section.querySelector(".description");
    const image = section.querySelector(".image");

    gsap.set([textContainer, image], { opacity: 0, x: 20 });
    gsap.set(banner, { y: 30, opacity: 0 });
    gsap.set(description, { y: 50, opacity: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    timeline
      .to(textContainer, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        image,
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        banner,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .to(
        description,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center gap-8 py-20 px-6 bg-gray-50"
    >
      {/* Text Section */}
      <div className="text-container w-full md:w-1/2 text-center md:text-left space-y-8">
        <h2 className="banner text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          The <span className="text-indigo-600">Harmony</span> of Talent
        </h2>
        <p className="description text-lg md:text-xl text-gray-600 leading-relaxed">
          Our singing group is a{" "}
          <span className="text-indigo-500 font-medium">melody</span> of voices,
          united in passion and creativity. With every performance, they inspire
          and captivate, showcasing the beauty of{" "}
          <span className="text-indigo-500 font-medium">collaboration</span> and
          the power of{" "}
          <span className="text-indigo-500 font-medium">
            artistic expression
          </span>
          .
        </p>
      </div>

      {/* Image Section */}
      <div className="image w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
        <img
          src={SingingGroupPhoto}
          alt="Singing Group"
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
    </section>
  );
}
