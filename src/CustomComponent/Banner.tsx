// import React from "react";
// import { useRef } from "react";
// import School from "../Photos/School.jpg";
// import { Button } from "@/components/ui/button";

// const Banner = () => {
//   const bannerRef = useRef<HTMLElement>(null);
//   return (
//     <div>
//       <section ref={bannerRef} className="relative h-screen overflow-hidden">
//         <img
//           src={School}
//           alt="Horizon Academy Campus"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-6xl font-bold mb-4">East Horizon</h1>
//             <p className="text-2xl mb-8">For a Better Tomorrow</p>
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
//             >
//               Explore Our Campus
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Banner;
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import School from "../Photos/School.jpg";
import NCC3 from "../../SchoolPics/NCC3.jpg";

const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  // const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial zoom animation for the image
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 10,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // Fade in content
    // gsap.from(contentRef.current, {
    //   opacity: 1,
    //   y: 100,

    //   delay: 0.5,
    // });
  }, []);

  return (
    <section ref={bannerRef} className="relative h-screen overflow-hidden">
      <img
        ref={imageRef}
        src={NCC3}
        alt="Horizon Academy Campus"
        className="w-full h-full object-cover transform origin-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
        <div
          // ref={contentRef}
          className="container mx-auto h-full flex mt-60 justify-center px-6"
        >
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">
                East Horizon English High School
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
