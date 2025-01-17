import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VideoBarProps {
  videoSrc: string;
}

const VideoBar: React.FC<VideoBarProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Set up ScrollTrigger
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

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
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoSrc}
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default VideoBar;
