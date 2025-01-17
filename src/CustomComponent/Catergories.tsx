// import { LucideIcon } from "lucide-react";

// interface Category {
//   name: string;
//   icon: LucideIcon;
//   description: string;
// }
// import { Book, Trophy, Palette, Users, Calendar, Building } from "lucide-react";
// import { Button } from "@/components/ui/button";
// const Catergories = () => {
//   const categories: Category[] = [
//     {
//       name: "Academic Excellence",
//       icon: Book,
//       description:
//         "Discover our rigorous academic programs and world-class faculty.",
//     },
//     {
//       name: "Athletic Achievement",
//       icon: Trophy,
//       description:
//         "Explore our competitive sports teams and state-of-the-art facilities.",
//     },
//     {
//       name: "Creative Expression",
//       icon: Palette,
//       description: "Unleash your creativity through our diverse arts programs.",
//     },
//     {
//       name: "Student Organizations",
//       icon: Users,
//       description:
//         "Find your community in our wide array of student-led clubs.",
//     },
//     {
//       name: "Campus Events",
//       icon: Calendar,
//       description:
//         "Stay engaged with exciting events throughout the academic year.",
//     },
//     {
//       name: "Modern Facilities",
//       icon: Building,
//       description: "Learn in cutting-edge classrooms and laboratories.",
//     },
//   ];
//   return (
//     <div>
//       <section className="py-25 bg-black-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Discover the Campus around{" "}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {categories.map((category) => (
//               <div
//                 key={category.name}
//                 className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <category.icon
//                   className="mx-auto mb-6 h-16 w-16 text-yellow-300"
//                   aria-hidden="true"
//                 />
//                 <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
//                 <p className="text-gray-600 mb-6">{category.description}</p>
//                 <Button
//                   variant="outline"
//                   className="mt-4 hover:bg-primary hover:text-white transition-colors"
//                 >
//                   Learn More
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Catergories;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon } from "lucide-react";
import { Book, Trophy, Palette, Users, Calendar, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Category {
  name: string;
  icon: LucideIcon;
  description: string;
}

const Categories = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const categories: Category[] = [
    {
      name: "Academic Excellence",
      icon: Book,
      description:
        "Discover our rigorous academic programs and world-class faculty.",
    },
    {
      name: "Athletic Achievement",
      icon: Trophy,
      description:
        "Explore our competitive sports teams and state-of-the-art facilities.",
    },
    {
      name: "Creative Expression",
      icon: Palette,
      description: "Unleash your creativity through our diverse arts programs.",
    },
    {
      name: "Student Organizations",
      icon: Users,
      description:
        "Find your community in our wide array of student-led clubs.",
    },
    {
      name: "Campus Events",
      icon: Calendar,
      description:
        "Stay engaged with exciting events throughout the academic year.",
    },
    {
      name: "Modern Facilities",
      icon: Building,
      description: "Learn in cutting-edge classrooms and laboratories.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate categories
      if (categoriesRef.current) {
        const cards = categoriesRef.current.children;
        gsap.from(cards, {
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl font-bold text-center mb-16">
          Discover Our <span className="text-primary">Campus Life</span>
        </h2>

        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform -rotate-6"></div>
                <category.icon
                  className="relative mx-auto h-16 w-16 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <button className="px-6 py-2 text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
