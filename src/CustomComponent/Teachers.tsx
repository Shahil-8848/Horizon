// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card } from "@/components/ui/card";
// import Teachers from "../../SchoolPics/Teacher2.jpg";

// gsap.registerPlugin(ScrollTrigger);

// interface TeacherCard {
//   id: number;
//   name: string;
//   image: string;
// }

// const teachers: TeacherCard[] = [
//   { id: 1, name: "Ms. Johnson", image: Teachers },
//   { id: 2, name: "Mr. Smith", image: Teachers },
//   { id: 3, name: "Mrs. Davis", image: Teachers },
//   { id: 4, name: "Dr. Brown", image: Teachers },
// ];

// const TeacherCards: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const cards = cardsRef.current.filter(
//       (card): card is HTMLDivElement => card !== null
//     );

//     gsap.set(cards, { opacity: 0, scale: 0.8 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//       },
//     });

//     tl.to(
//       cards[0],
//       { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" },
//       0
//     )
//       .to(
//         cards[1],
//         { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" },
//         0.2
//       )
//       .to(
//         cards[2],
//         { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" },
//         0.4
//       )
//       .to(
//         cards[3],
//         { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5, ease: "power3.out" },
//         0.6
//       );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-background to-background/80 overflow-hidden"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
//           The Angels of the Academy
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
//           {teachers.map((teacher, index) => (
//             <Card
//               key={teacher.id}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className="w-64 h-80 overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
//               style={{
//                 transform: `translate(${index % 2 === 0 ? "-100%" : "100%"}, ${
//                   index < 2 ? "-100%" : "100%"
//                 })`,
//               }}
//             >
//               <img
//                 src={teacher.image}
//                 alt={teacher.name}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                 <h3 className="text-lg font-semibold">{teacher.name}</h3>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeacherCards;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Teachers from "../../SchoolPics/Teacher2.jpg";
import Teachers3 from "../../SchoolPics/Teachers3.jpg";
import Teachers4 from "../../SchoolPics/Teachers4.jpg";
import Teachers5 from "../../SchoolPics/Teachers5.jpg";
import Personal3 from "../../SchoolPics/Personal3.jpg";
import Personal2 from "../../SchoolPics/Personal2.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Teacher {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  initialPosition: { x: number; y: number };
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ms. Sarah Johnson",
    image: Teachers,
    gridArea: "1 / 1 / 3 / 4",
    initialPosition: { x: -100, y: -100 },
  },
  {
    id: 2,
    name: "Mr. David Smith",
    image: Teachers3,
    gridArea: "1 / 4 / 3 / 6",
    initialPosition: { x: 100, y: -100 },
  },
  {
    id: 3,
    name: "Mrs. Emily Davis",
    image: Teachers4,
    gridArea: "1 / 4 / 4/ 9",
    initialPosition: { x: 100, y: 0 },
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    image: Teachers5,
    gridArea: "3 / 1 / 5 / 4",
    initialPosition: { x: -100, y: 100 },
  },
  {
    id: 5,
    name: "Ms. Rachel Wilson",
    image: Personal2,
    gridArea: "3 / 4 / 5 / 6",
    initialPosition: { x: 0, y: 100 },
  },
  {
    id: 6,
    name: "Mr. James Anderson",
    image: Personal3,
    gridArea: "4 / 6 / 6 / 9",
    initialPosition: { x: 100, y: 100 },
  },
];

const TeacherCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    // Initial state
    gsap.set(titleRef.current, { opacity: 0, y: 50 });

    // Set initial positions for cards
    cards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        scale: 0.8,
        x: teachers[index].initialPosition.x,
        y: teachers[index].initialPosition.y,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate cards with stagger
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        `-=${index === 0 ? 0.5 : 0.8}`
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b  ">
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div ref={containerRef} className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            OUR TEACHERS
          </h2>
        </div>

        <div className="grid grid-cols-8 grid-rows-5 gap-4 relative min-h-[800px]">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              style={{
                gridArea: teacher.gridArea,
              }}
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-lg">
                    {teacher.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherCards;
