import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageLoader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(loaderRef.current, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      delay: 2,
    }).to(loaderRef.current, {
      display: "none",
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-primary flex items-center justify-center"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">East Horizon Academy</h1>
        <p className="text-xl">Empowering Future Leaders</p>
      </div>
    </div>
  );
};

export default PageLoader;
