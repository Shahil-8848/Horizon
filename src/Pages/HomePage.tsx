import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Gallery from "../CustomComponent/Gallery";
// import Header from "@/CustomComponent/Header";
import Banner from "@/CustomComponent/Banner";
import Status from "@/CustomComponent/Status";
// import Catergories from "@/CustomComponent/Catergories";
import FullScreenGallery from "@/CustomComponent/FullScreenGallery";
import NewsAndEvents from "@/CustomComponent/News&Event";
// import Footer from "@/CustomComponent/Footer";
import VideoBar from "@/CustomComponent/VideoBar";
import HorizonVideo from "../../SchoolPics/HorizonVideo.mp4";
import ProgramCards from "@/CustomComponent/Classes/ProgramCard";
import Catalogue from "@/CustomComponent/Catalogue";
import OutroVideo1 from "../../SchoolPics/OutroVideo.mp4";
import OutroVideo from "@/CustomComponent/OutroVideo";
import Sports from "@/CustomComponent/Sports";
import SingingShowcase from "@/CustomComponent/Singing";
// import Header from "@/CustomComponent/Header";
import PrincipalMessage from "@/CustomComponent/Message";
// import HorizontalScrollCards from "@/CustomComponent/Part/HorizontalScrollCards";
import TeacherCards from "@/CustomComponent/Teachers";
import Facilities from "@/CustomComponent/Facilities";
import Bangalore from "@/CustomComponent/Banglore";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: number;
  event: string;
}

// Animation type definitions
interface GSAPAnimation {
  trigger: HTMLElement;
  start: string;
}

export default function HomePage() {
  const bannerRef = useRef<HTMLElement>(null);

  const timelineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner animation
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );
      }

      // Stats animation

      // Timeline animation
      if (timelineRef.current) {
        gsap.from(timelineRef.current.children, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          } as GSAPAnimation,
          opacity: 0,
          x: -50,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Events animation
      if (eventsRef.current) {
        gsap.from(eventsRef.current.children, {
          scrollTrigger: {
            trigger: eventsRef.current,
            start: "top 80%",
          } as GSAPAnimation,
          opacity: 0,
          scale: 0.8,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
        });
      }
    });
    ScrollTrigger.create({
      trigger: ".full-screen-gallery",
      start: "top bottom",
      end: "top top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(".full-screen-gallery", {
          yPercent: -100 * (1 - self.progress),
          ease: "none",
        });
      },
    });

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      ctx.revert(); // Cleanup GSAP animations
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timeline: TimelineEvent[] = [
    { year: 1970, event: "East Horizon Academy Founded" },
    { year: 1985, event: "Opened State-of-the-Art Science Center" },
    { year: 2000, event: "Launched Online Learning Program" },
    { year: 2015, event: "Established Global Exchange Program" },
    { year: 2023, event: "Celebrating 50+ Years of Academic Excellence" },
  ];

  return (
    <div className="min-h-screen  max-w-screen flex flex-col bg-white">
      {/* Banner Section */}
      <Banner />
      <VideoBar videoSrc={HorizonVideo} />

      {/* Stats Section */}
      <Status />

      {/* Explore School Categories */}
      {/* <Catergories /> */}
      <ProgramCards />
      <Sports />
      <SingingShowcase />
      <FullScreenGallery />
      <Catalogue />
      <Bangalore />
      {/* <HorizontalScrollCards /> */}
      <TeacherCards />
      <Facilities />
      <NewsAndEvents />

      {/* Timeline Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div ref={timelineRef} className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="mb-8 flex">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold">{item.year}</span>
                </div>
                <div className="flex-grow pb-8 border-l-4 border-primary pl-8 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2"></div>
                  <p className="text-xl">{item.event}</p>
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </section>
      {/* <Gallery /> */}
      <PrincipalMessage />
      <OutroVideo videoSrc={OutroVideo1} />

      {/* Events Section */}

      {/* Footer */}
    </div>
  );
}
