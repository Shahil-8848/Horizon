import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OuterVideoProps {
  videoSrc: string;
}

const OutroVideo: React.FC<OuterVideoProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const text = textRef.current;

    if (!video || !container || !text) return;

    // Set up ScrollTrigger for the container
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    // Animate the text
    gsap.fromTo(
      text,
      {
        opacity: 0,

        y: 250,
      },
      {
        opacity: 1,
        delay: 5,
        y: 100,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    // Play/pause video based on visibility
    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.5,
    });

    observer.observe(container);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <video
        ref={videoRef}
        className="w-full h-full object-cover absolute inset-0"
        src={videoSrc}
        muted
        loop
        playsInline
      />
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <h2 className="text-white text-5xl md:text-7xl font-bold text-center font-cursive">
          For a Better Tomorrow
        </h2>
      </div>
    </div>
  );
};

export default OutroVideo;
