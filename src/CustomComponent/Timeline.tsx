// import React, { useEffect } from 'react'
// import { useRef } from 'react'

// const Timeline = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const timeline: TimelineEvent[] = [
//     { year: 1970, event: "East Horizon Academy Founded" },
//     { year: 1985, event: "Opened State-of-the-Art Science Center" },
//     { year: 2000, event: "Launched Online Learning Program" },
//     { year: 2015, event: "Established Global Exchange Program" },
//     { year: 2023, event: "Celebrating 50+ Years of Academic Excellence" },
//   ];
//   return (
//     <div>
//        <section className="py-24 bg-gray-900 text-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
//           <div ref={timelineRef} className="relative">
//             {timeline.map((item, index) => (
//               <div key={index} className="mb-8 flex">
//                 <div className="flex-shrink-0 w-24 text-right mr-8">
//                   <span className="text-2xl font-bold">{item.year}</span>
//                 </div>
//                 <div className="flex-grow pb-8 border-l-4 border-primary pl-8 relative">
//                   <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2"></div>
//                   <p className="text-xl">{item.event}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Timeline
