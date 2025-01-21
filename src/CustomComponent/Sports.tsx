// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import FootballTeamPhoto from "../../SchoolPics/Sports1.jpg";

// export default function Sports() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const image = section.querySelector(".image");
//     const text = section.querySelector(".text");
//     const highlight = section.querySelectorAll(".highlight");

//     gsap.set([image, text], { opacity: 0, x: 100 });
//     gsap.set(highlight, { color: "#fbbf24" }); // Initial highlight color

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//       },
//     });

//     timeline
//       .to(image, {
//         opacity: 1,
//         x: 0,
//         duration: 3,
//         ease: "power3.out",
//       })
//       .to(
//         text,
//         {
//           opacity: 1,
//           x: 20,
//           duration: 3,
//           ease: "power3.out",
//         },
//         "-=0.8"
//       )
//       .to(highlight, {
//         color: "#f97316", // Animate to a vibrant orange
//         duration: 0.5,
//         stagger: 0.2,
//       });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 bg-gray-100"
//     >
//       {/* Image Section */}
//       <div className="image flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
//         <img
//           src={FootballTeamPhoto}
//           alt="Football Team"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="text w-full md:w-1/2 text-center md:text-left space-y-6">
//         <h2 className="text-4xl font-bold text-gray-800">
//           Where <span className="highlight">Champions</span> Are Made
//         </h2>
//         <p className="text-lg text-gray-600 leading-relaxed">
//           Our football team embodies <span className="highlight">teamwork</span>
//           , <span className="highlight">resilience</span>, and the spirit of{" "}
//           <span className="highlight">healthy competition</span>. Together, they
//           learn the value of discipline and the thrill of chasing dreams.
//         </p>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VotingGroup from "../../SchoolPics/VotingGroup.jpg";
gsap.registerPlugin(ScrollTrigger);

const Sports: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Image Collage */} {/* Centered Title */}
        {/* Grid Layout */}
        <div className="image flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <img
            src={VotingGroup}
            alt="School"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side - Description */}
        <div className="w-full md:w-1/2 space-y-6 p-8">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Welcome to East Horizon English High School
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            East Horizon English High School was established in 2048 BS after a
            lot of deliberation with the objective of not only imparting quality
            education in English medium but, bearing in mind the psychological
            and physical needs of the student, also guiding and training them so
            as to enable them to become responsible and dutiful citizens in
            future.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Having crossed more than 33 years in the service of the nation, the
            school has expanded and developed into a full-fledged Higher
            Secondary School (+2) as a result of the commitment of the
            authorities and facilities to put their heart and soul into the
            execution of this noble, solemn and sacred task. (Education for a
            better tomorrow) has been adopted as the motto of the institution.
            At our prestigious institution, we pride ourselves on our
            exceptional faculty members who bring years of experience and
            dedication to their craft. Each teacher is carefully selected not
            only for their academic excellence but also for their passion in
            nurturing the next generation of leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sports;
